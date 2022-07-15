import { useState } from "react";
import { useQuery } from "react-query";
//import material ui 
import { Drawer, Grid, Badge } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { AddShoppingCart, } from "@material-ui/icons";

//import component
import Item from "./items/item";

//styles 
import { Wrapper } from "./App.styles";

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
  await(await fetch('https://fakestoreapi.com/products')).json();

const App = () => {

  //fetch the products from the API
  const { data, isLoading, error } = useQuery<CartItemType[]>('products',getProducts);
  console.log(data);
  
  //what to do with the items
  const getTotalItems = () => null;
  const handleAddToCart = (clickItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  //handle broken calls and calls in progress 
  if (isLoading) return <LinearProgress />
  if (error) return <div>This failed </div>

  return (
    <Wrapper>
      <div className="App">
      Shopping Cart in Typescript with ReactJS
      </div>
      {/* grid to mapp the network call */}
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
