import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {carttemsActions} from '../../store/cartItemsSlice'; 

const CartItem = (props) => {

  const cartItemDispatch = useDispatch();

  const {id, mealsTitle, mealsQuantity, total, mealsPrice } = props.item;

  const increaseHandler= ()=>{
    cartItemDispatch(carttemsActions.addMeals({mealsTitle,mealsQuantity:1,mealsPrice}));
  }

  const decreaseHandler= ()=>{
    console.log("mealsId: ",id);
    cartItemDispatch(carttemsActions.removeMeals(id));
  } 


  return (
    <li className={classes.item}>
      <header>
        <h3>{mealsTitle}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${mealsPrice.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{mealsQuantity}</span>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={decreaseHandler}>-</button>
          <button type="button" onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
