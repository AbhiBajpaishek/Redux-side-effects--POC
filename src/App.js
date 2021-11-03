import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from 'react-redux';
import {sendCartData} from './store/cartItemsSlice';
import {useEffect } from 'react';
import {getCartData} from './store/cartItemsSlice';

let isFirst = true;
function App() {

  const showCart = useSelector(state => state.ui.showCart);
  const cart = useSelector(state => state.cartItems);
  const dispatch = useDispatch(); 
  useEffect(() => {
    if (isFirst) {
      isFirst = false;
      dispatch(getCartData());
      return ;
    }
    dispatch(sendCartData(cart));
  }, [cart,dispatch]);


  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
