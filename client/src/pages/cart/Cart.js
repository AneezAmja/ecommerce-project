import React, { useEffect } from "react";
import CartTable from "../../components/cartTable/CartTable";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user/userSlice";
import { getCart } from "../../features/cart/cartSlice";
import { purchaseProducts } from "../../features/product/productSlice";
import "./Cart.scss";

const Cart = () => {
  const { cart, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.cart
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getCart());

    console.log(cart[0]?.items)

    if (isError) {
      toast.error(message);
    }
  }, [isError, message, dispatch]);

  // Check if cart is null or undefined before accessing its properties
  const cartItemsExist = cart && cart[0]?.items?.length > 0;

  const priceOfItemsInBasket = cartItemsExist
    ? cart[0]?.items.map((item) => item.quantity * item.productPrice)
    : [];

  const subttotal = priceOfItemsInBasket?.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  const handlePurchase = () => {
    const productData = [];
  
    for (let i = 0; i < cart[0]?.items?.length; i++) {
      const productId = cart[0]?.items?.[i]?.productId;
      const quantity = cart[0]?.items?.[i]?.quantity;
  
      const productInfo = {
        productId: productId,
        quantity: quantity
      };
  
      productData.push(productInfo);
    }
  
    dispatch(purchaseProducts(productData));
  
    if (isSuccess) {
      navigate("/");
    }
  
    console.log("I have purchased");
  };

  return (
    <div className="cart__container">
      <div className="cart__table-container">
        <h1 className="cart__title">Items in my cart</h1>
        {cartItemsExist ? <CartTable /> : <p><i>No items in the cart.</i></p>}
      </div>

      <div className="cart__summary-container">
        {cart && cart[0]?.items?.length > 0 && (
          <div className="cart__summary-inner">
            <div className="cart__summary-tile">
              <h2>summary</h2>
            </div>
            <div className="cart__summary-final-prices">
              <div className="cart__summary-indiv-prices">
                subtotal:
                <p>{`£${subttotal}`}</p>
              </div>
              <div className="cart__summary-indiv-prices">
                Shipping:
                <p>£3.99</p>
              </div>
              <div className="cart__summary-indiv-prices">
                Final total:
                <p>{`£${subttotal + 3.99}`}</p>
              </div>
            </div>
            <button className="cart__summary-purchase" onClick={handlePurchase}>
              Purchase product
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
