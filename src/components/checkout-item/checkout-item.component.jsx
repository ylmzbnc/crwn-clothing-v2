// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import { addItemToCart, decreaseItemQuantity, removeItemFromCart } from "../../store/cart/cart.slice";




const CheckoutItem = ({ checkoutItem }) => {
  const dispatch = useDispatch();
  
  // const { addItemToCart, decreaseItemQuantity, removeItemFromCart } =
  //   useContext(CartContext);
  
  
  const { name, imageUrl, price, quantity } = checkoutItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img alt={`${name}`} src={imageUrl} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className='arrow' onClick={() => dispatch(decreaseItemQuantity(checkoutItem))}>&#10094;</div>
        <span className='value' >{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItemToCart(checkoutItem))}>&#10095;</div>
      </span>
      <span className='price' > {price} </span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeItemFromCart(checkoutItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
