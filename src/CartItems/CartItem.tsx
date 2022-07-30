import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';
import { CartItemType } from '../App'
import { Wrapper } from './CartItem.styles';


//set the type values for the incoming props
type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};


const CartItem: React.FC<Props> = ({
  item,
  handleAddToCart,
  removeFromCart
}) =>
  <Wrapper>
    <div>
      <div>
        <h2>{item.title}</h2>
        <img className='cart_img' src={item.image} alt={item.title} />
      </div>
      <div>
        <h6>Price $: {item.price}</h6>
        <h6>Total Items: {item.amount}</h6>
        <h3>Total cost: {(item.amount * item.price).toFixed(2)}
        </h3>
        <Button
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </Button>
        <Button
          onClick={() => handleAddToCart(item)}
        >
          Add
        </Button>
      </div>
    </div >
  </Wrapper >

export default CartItem