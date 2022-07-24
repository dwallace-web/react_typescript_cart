import { useState } from "react";
import { useQuery } from "react-query";
//import material ui 
import { Drawer, Grid, Badge } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { AddShoppingCart, } from "@material-ui/icons";
import Cart from './Cart/Cart'

//import component
import Item from "./items/item";

//styles 
import { StyledButton, Wrapper } from "./App.styles";

export type CartItemType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: object;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {

  //fetch the products from the API
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);

  //handle the cart opening
  const [cartOpen, setCartOpen] = useState(false);
  //handle the items in the shopping cart with the cart item type array
  const [cartItems, setCartItems] = useState([] as CartItemType[]);


  //what to do with the items

  //this function will go through the items and return the total number of items in the cart, starting from a value of zero;
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((accumulator: number, item) => accumulator + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {

    setCartItems(prev => {
      //check the cartitemtype array and see if the items is in the cart array
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      //if the the item is in the cart increment or do nothing
      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        //spread the cart item type array array, add the clicked item and set thee amount to one
        return [...prev, { ...clickedItem, amount: 1 }];
      }
    });
  };


  const removeFromCart = (id: number) => {

    setCartItems(prev =>
      prev.reduce((accumulator, item) => {
        //if the item and the item being reduced in the reducedin the array match
        if (item.id === id) {
          //if the item is one, return the accumulator with an empty value
          if (item.amount === 1)
            return accumulator;
          //otherwise remove one item
          return [...accumulator, { ...item, amount: item.amount - 1 }];
        } else {
          // leave it the same
          return [...accumulator, item];
        }
      }, [] as CartItemType[])
    );
  }

  //handle broken calls and calls in progress 
  if (isLoading) return <LinearProgress />
  if (error) return <div>This failed </div>

  return (
    <Wrapper>

      <div className="App">
        Shopping Cart in Typescript with ReactJS
      </div>

      {/* handle how the shopping cart displays on the app*/}
      <Drawer anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          removeFromCart={removeFromCart}
        />
      </Drawer>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge
          // badgeContent={getTotalItems(cartItems)} 
          color="error">
          <div>Shopping Cart</div>
          <AddShoppingCart />
        </Badge>
      </StyledButton>

      {/* grid to mapp the network call response to the page*/}
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
