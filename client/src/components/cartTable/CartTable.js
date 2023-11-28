import React, { useEffect } from "react";
import "./CartTable.css";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getIndividualProduct } from "../../features/product/productSlice";
import { getUser } from "../../features/user/userSlice";
import { addToCart, getCart, removeFromCart } from "../../features/cart/cartSlice";
import { FaTimes } from "react-icons/fa";


const CartTable = () => {
  const { cart, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUser());
    dispatch(getCart());

    if (isError) {
      toast.error(message);
    }
  }, [isError, message, dispatch]);

  // console.log(cart[0]?.items[0].productId);
  // console.log(cart[0]?.items?.map((cartItem) => {console.log(cartItem)}));


  const handleRemoveProduct = () => {
    console.log("hey")

    const cartData = {
      productId: cart[0]?.items[0]?.productId,
      // productId: "652061aefa5cfd81ca8406b1",
    }


    dispatch(removeFromCart(cartData)).then(()=> dispatch(getCart()))

  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Final Price</th>
          <th>Remove Product</th>
        </tr>
      </thead>
      <tbody>
        {cart && cart[0]?.items?.map((cartItem) => {
          return (
            <tr key={cartItem._id} className="cart-table__row">
              <td>
                <div className="cart__item">
                  <img
                    src={cartItem.productImage}
                    alt={cartItem.productName}
                    className="cart-table__image"
                  />{" "}
                  <p className="cart-table__name">{cartItem.productName} </p>
                </div>
              </td>
              <td>{`£${cartItem.productPrice}`}</td>
              <td>{cartItem.quantity}</td>
              <td>{`£${cartItem.productPrice * cartItem.quantity} `}</td>
              <td>
                  <div className="cart-remove" onClick={handleRemoveProduct}>
                    <FaTimes />

                  </div>
                </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;