import Button from '@material-ui/core/Button';
//types
import {CartItemType} from '../App';

//Styles
import {Wrapper} from './item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({item, handleAddToCart }) => (
    <Wrapper>
    <div>
        <img src={item.image} alt={item.description} />
        <div>
            <h3>{item.title}</h3>
            <h5>{item.price}</h5>
            <Button onClick={()=> handleAddToCart(item)}>Add to Cart </Button>
        </div>
    </div>
    </Wrapper>
);

export default Item