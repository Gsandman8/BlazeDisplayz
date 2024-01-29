import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
import { ShoppingCartOutlined } from '@mui/icons-material';  

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    getCheckout({
      variables: { 
        products: [...state.cart],
      },
    });
  } 

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span className='cart'>
        <ShoppingCartOutlined id='icon' style={{cursor: 'pointer'}} />
        </span>
      </div>
    );
  }

  return (
    <main className='cartContainer'>
      <section className='titleContainer'>
        <h4>YOUR CART</h4>
        <div className="closeBtn" onClick={toggleCart}>
          X
        </div>
      </section>
      <hr/>
      {state.cart.length ? (
        <section>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className='totalContainer'>
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <>
                <br/>
                <button className='checkoutBtn'onClick={submitCheckout}>Checkout</button>
              </>
            ) : (
              <>
                <br/>
                <span className='loginMsg'>log in to check out!</span>
              </>
            )}
          </div>
        </section>
      ) : (
        <section className='emptyCart'>
          <h3>
            Your cart is empty!
          </h3>
          <p>Add your favorite items to your cart.</p>
          <hr/>
          <button className='newArrivalsBtn'> 
            <Link to='/newarrivals' onClick={toggleCart} >Shop Now</Link> 
          </button>
        </section>
      )}
    </main>
  );
};

export default Cart;
