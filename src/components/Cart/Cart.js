import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

let isFirstTime = true;

const Cart = () => {

  let cartItems = useSelector(state => state.cartItems);
  isFirstTime= false;
  useEffect(()=>{
    const dbCall = async ()=>{
      const response = await fetch('https://food--ordering-default-rtdb.firebaseio.com/cart.json');
      const cart = await response.json();
      console.log("Select: ",cart);
      //cart.map((item) => )
    }
    if(!isFirstTime){
      dbCall();
    }
  },[cartItems]);


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) =>{
          return (
          <CartItem key = {cartItem.id}
            item={cartItem}
          />
        );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
