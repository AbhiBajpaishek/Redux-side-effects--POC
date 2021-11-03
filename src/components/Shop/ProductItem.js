import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { carttemsActions } from '../../store/cartItemsSlice';
import React,{useEffect} from 'react';

let isFirst= true;

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const cartItemDispatch = useDispatch();
  const cart = useSelector(state => state.cartItems);
  const addMealsHandler = () => {
    cartItemDispatch(carttemsActions.addMeals({
      id:id,
      mealsTitle:title,
      mealsQuantity:1,
      mealsPrice:+price,
      total:price
    }));
  }
  
  useEffect(()=>{
  const updateAPI = async ()=> {
    const response = await fetch('https://food--ordering-default-rtdb.firebaseio.com/cart.json',
    {
      method:'PUT',
      type:'application/json',
      body:JSON.stringify(cart)
    });
    await response.json();
    }
    
    if(!isFirst){
      updateAPI();
    }
    isFirst = false;
  },[cart]);


  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button type="button" onClick = {addMealsHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
