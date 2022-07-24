import Button from '@material-ui/core/Button'
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
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
      <div className='row'>
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
      <h5>Price $: {item.price}</h5>
      <h5>Total Items: {item.amount}</h5>
      <h6>Total cost: {(item.amount * item.price).toFixed(2)}</h6>
    </div>
  </Wrapper>

export default CartItem