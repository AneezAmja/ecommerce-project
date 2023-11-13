import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import Spinner from "../../components/spinner/Spinner";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  getIndividualProduct,
  purchaseProduct,
} from "../../features/product/productSlice";
import { getUser } from "../../features/user/userSlice";
import { addToCart, getCart } from "../../features/cart/cartSlice";

const ProductDetail = () => {
  const { product, isError, isLoading, message } = useSelector(
    (state) => state.products
  );

  const [quantity, setQuantity] = useState(0);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getIndividualProduct(id));

    if (isError) {
      toast.error("Please register or login before making a purchase!");
    }
  }, [isError, message, dispatch, id]);

  const purchaseAmount = () => {
    const productInfo = {
      productId: id,
      quantity,
    };

    dispatch(purchaseProduct(productInfo)).then(() =>
      dispatch(getIndividualProduct(id))
    );
  };

  const addToBasket = () => {
    const cartData = {
      productId: product.productDetail._id,
      quantity,
    };

    dispatch(addToCart(cartData)).then(() => dispatch(getCart()));
    console.log("added to basket");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-detail__image-container" key={product?._id}>
          <img
            src={product?.imageURL}
            alt={product?.name}
            className="product-detail__image"
          />
        </div>

        <div className="product-detail__info">
          <h2 className="product-detail__name">{product?.name}</h2>
          <p className="product-detail__price">£{product?.price}</p>
          <p className="product-detail__description">
            {product?.productDetail?.description}
          </p>
          <p className="product-detail__stock">
            <i style={{ opacity: "0.8" }}>stock quantity: </i>
            <strong>{product?.productDetail?.stockQuantity}</strong>
          </p>

          <div className="product-detail-buy-container">
            <div className="quantity-input">
              <input
                className="quantity-amount"
                type="number"
                id="quantity"
                name="quantity"
                placeholder="0"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="product-detail__info">
              <h2 className="product-detail__name">{product?.name}</h2>
              <p className="product-detail__price">£{product?.price}</p>
              <p className="product-detail__description">
                {product?.productDetail?.description}
              </p>
              <p className="product-detail__stock">
                <i style={{ opacity: "0.8" }}>stock quantity: </i>
                <strong>{product?.productDetail?.stockQuantity}</strong>
              </p>

              <div className="product-detail-buy-container">
                <div className="quantity-input">
                  <input
                    className="quantity-amount"
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="0"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>

                <button
                  onClick={addToBasket}
                  className="product-detail-buy-container__buy"
                >
                  Add to basket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
