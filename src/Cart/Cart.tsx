import CartItem from '../CartItems/CartItem';
import { Wrapper } from './cart.styles';
import { CartItemType } from '../App';

//set the type values for the incoming props
type Props = {
  cartItems: CartItemType[];
  handleAddToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, handleAddToCart, removeFromCart }) => {
  //caculate the total of items in the cart using .reduce - return sum of all elements in the items array 
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((accumulator: number, item) => accumulator + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <div>
          <CartItem
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;