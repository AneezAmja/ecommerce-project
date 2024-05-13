import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartIcon.scss";
import { getCart } from "../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();

  const { cart, isError, isSuccess, message } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getCart())
  }, [isError, dispatch]);

  const getTotalQuantity = (cart) => {
    let totalQuantity = 0;
  
    if (cart && cart[0] && cart[0].items) {
      totalQuantity = cart[0].items.reduce((accumulator, item) => accumulator + item.quantity, 0);
    }
  
    return totalQuantity;
  };

  const totalQuantity = getTotalQuantity(cart);

  return (
    <div className="shopping-cart__container">
      <FaShoppingCart
        className="shopping-cart"
        style={{ width: "20px", height: "20px" }}
      />
      <div className="shopping-cart--counter">
        {totalQuantity}
      </div>
    </div>
  );
};

export default Cart;
