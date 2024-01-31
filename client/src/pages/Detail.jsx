import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import { BeatLoader } from 'react-spinners';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  console.log(state);

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart, currentCategory } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className="container my-1 row detailsContainer">
          <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
          <div className="col-6 mb-3 border border-dark rounded description" >
          

          <h2 className="text-center">{currentProduct.name}</h2>

          <p className="text-center">{currentProduct.description}</p>

          <p className='text-center'>
            <strong>Price: </strong>${currentProduct.price}{' '}
          </p>
          <p className='text-center'>
            <button className='rounded cartBtn' onClick={addToCart}>Add to Cart</button>
            <button
              className='rounded cartBtn'
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>
          <Link to={`/${currentCategory}`} ><p className='goBack'>← Back to Products</p></Link>

          <img className='border border-dark blazeLogo'  src={`/images/other/blaze.PNG`} alt="Blaze Diplayz Logo" />
          </div>
          <div className="col-6">
          <img
            className="img-thumbnail text-center"
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
          </div>
        </div>
      ) : null}
        {loading ? 
          <div className="loaderContainer">
            <BeatLoader color={'#732c7b'} height={4} width={150} />
          </div> 
        : null}
    </>
  );
}

export default Detail;
