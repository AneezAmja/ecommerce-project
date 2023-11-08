import React from "react";
import CartTable from "../../components/cartTable/CartTable";
import "./Cart.css";

const Cart = () => {
  const handlePurchase = () => {
    console.log("I have purchased");
  };

  return (
    <div className="cart__container">
      <div className="cart__table-container">
        <h1 className="cart__title">Items in my cart</h1>
        <CartTable />
      </div>

      <div className="cart__summary-container">
        <div className="cart__summary-inner">
          <div className="cart__summary-tile">
            <h2>summary</h2>
          </div>
          <div className="cart__summary-final-prices">
            <div className="cart__summary-indiv-prices">
              subtotal:
              <p>£1321</p>
            </div>
            <div className="cart__summary-indiv-prices">
              Shipping:
              <p>£3.99</p>
            </div>
          </div>
        </div>
        <div className="cart__summary-outer">
          <button className="cart__summary-purchase" onClick={handlePurchase}>Purchase product</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
