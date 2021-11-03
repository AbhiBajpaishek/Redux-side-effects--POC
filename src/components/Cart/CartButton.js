import classes from './CartButton.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { uiSliceActions } from '../../store/uiSlice';

const CartButton = (props) => {

  const cartItems = useSelector(state => state.cartItems)
  const totalItems = cartItems.reduce((prev,item)=>{
    return prev+Number(item.mealsQuantity);
  },0);
  const uiDispatch = useDispatch();

  const toggleCartHandler = () =>{
      uiDispatch(uiSliceActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick = {toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems? totalItems:0}</span>
    </button>
  );
};

export default CartButton;
