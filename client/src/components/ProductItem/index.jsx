import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Tooltip from 'react-bootstrap/Tooltip'; 
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { useState } from 'react';


function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: _id
    });
    idbPromise('cart', 'delete', { ...item });
  }

  const onHover = () => {
    console.log("hover")
  }

  return (
    
    <div className="card px-1 py-1" style={{border:"white",borderBottom:"black "}}>
      <Link to={`/products/${_id}`}>
        <div className="card-header" style={{backgroundColor:"white", color:"black", border:"black"}}>
      <h4 style={{color:"black"}}>{name}</h4>
      </div>
        <img
          alt={name}
          src={`/images/${image}`}
        />
      </Link>
      <div>
        <div> Only {quantity} {pluralize("item", quantity)} left!</div>
        <span>${price}</span>
      </div>
      <nav className="justify-space-between">
      <OverlayTrigger
        key='top'
        placement='top'
        overlay={
          <Tooltip id={`tooltip-top`}>
            Add to Cart
          </Tooltip>
        }>
          <button style={{border:"none", backgroundColor:"white"}} onClick={addToCart}><AddShoppingCartIcon/></button>
        </OverlayTrigger>
        <OverlayTrigger
        key='top1'
        placement='top'
        overlay={
          <Tooltip id={`tooltip-top`}>
            Remove from Cart
          </Tooltip>
        }>
          <button style={{border:"none", backgroundColor:"white"}} onClick={removeFromCart}><RemoveShoppingCartIcon/></button>
        </OverlayTrigger>
        {/* <OverlayTrigger
        key='top'
        placement='top'
        overlay={
          <Tooltip id={`tooltip-top`}>
            Add to Wishlist
          </Tooltip>
        }>
          <button><CardGiftcardIcon/></button>
        </OverlayTrigger> */}
      </nav>
    <br/>
    <br/>
    </div>

  );
}

export default ProductItem;
