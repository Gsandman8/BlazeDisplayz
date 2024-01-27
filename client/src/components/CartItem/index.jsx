import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import './CartItem.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const handleQuantityChange = (amount) => {
    const newQuantity = item.purchaseQuantity + amount;

    if (newQuantity > -1) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: newQuantity
      });

      idbPromise('cart', 'put', { ...item, purchaseQuantity: newQuantity });
      
      if (newQuantity === 0) {
        removeFromCart(item);
      }
    
    }
  };

  return (
    <main className="card mb-3 cartItemContainer">
      <div className="row g-0">
        <section className="col-md-4">
          <img
            src={`/images/${item.image}`}
            alt=""
            className="img-fluid rounded-start cartImg"
          />
        </section>
        <section className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">${item.price}</p>
            <div className="d-flex align-items-center">
              <span className="me-2 qty">Qty:</span>
              <button className="btn btn-outline-secondary me-2" onClick={() => handleQuantityChange(-1)}>-</button>
              <span>{item.purchaseQuantity}</span>
              <button className="btn btn-outline-secondary ms-2" onClick={() => handleQuantityChange(1)}>+</button>
              <button className="btn ms-2" onClick={() => removeFromCart(item)}>
                  <DeleteOutlineIcon />
                </button>
            </div>
          </div>    
        </section>
      </div>
    </main>
  );
}

export default CartItem;