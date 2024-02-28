import React, { useEffect } from "react";
import "./CartTable.scss";
import Spinner from "../../components/spinner/Spinner";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user/userSlice";
import {  getCart, removeFromCart } from "../../features/cart/cartSlice";
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

  const handleRemoveProduct = () => {

    const cartData = {
      productId: cart[0]?.items[0]?.productId
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
          <th className="item-header">Item</th>
          <th className="unit-price-header">Unit Price</th>
          <th className="quantity-header">Quantity</th>
          <th className="final-price-header">Final Price</th>
          <th className="remove-product-header">Remove Product</th>
        </tr>
      </thead>
      <tbody>
        {cart && cart[0]?.items?.map((cartItem) => {
          return (
            <tr key={cartItem._id} className="cart-table__row">
              <td className="cart__product-item">
                <div className="cart__item">
                  <img
                    src={cartItem.productImage}
                    alt={cartItem.productName}
                    className="cart-table__image"
                    loading="lazy"
                  />{" "}
                  <p className="cart-table__name">{cartItem.productName} </p>
                </div>
              </td>
              <td className="cart__price">{`£${cartItem.productPrice}`}</td>
              <td className="cart__quantity">{cartItem.quantity}</td>
              <td className="cart__final-price">{`£${cartItem.productPrice * cartItem.quantity} `}</td>
              <td className="cart__remove-item">
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
