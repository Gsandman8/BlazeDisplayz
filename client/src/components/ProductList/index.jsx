import { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { BeatLoader } from 'react-spinners';
import './ProductList.css';

function ProductList() {

  const [state, dispatch] = useStoreContext();
  console.log(state);
  const { currentCategory, currentTag } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory && !currentTag) {
      return state.products;
    }

    if (currentTag === 'new') {
      return state.products.filter((product) => product.tags[1].name === currentTag);
    }
    if (currentTag === 'Clothing') {
      return state.products.filter((product) => product.category.name === currentCategory);
    }
    if (currentTag && currentCategory) {
      let productsToFilter = state.products.filter(product => product.category.name === currentCategory);
      return productsToFilter.filter(product => product.tags[0].name === currentTag);
    }
    return state.products.filter(
      (product) => product.category.name === currentCategory
    );
  }

  return (
    <div className="my-2">
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? 
        <div className="loaderContainer">
          <BeatLoader color={'orange'} height={4} width={150} />
        </div> 
        : null}
    </div>
  );
}

export default ProductList;
