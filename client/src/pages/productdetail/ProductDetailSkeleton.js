import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductDetail.scss";

const ProductDetailSkeleton = ({user}) => {
  return (
    <div className="product-detail-container fsdf">
      <div className="product-detail">
        <div className="product-detail__image-container">
          <Skeleton
            style={{ width: "100%", height: "100%", position: 'absolute', left:0, objectFit: "cover" }}
          />
        </div>

        <div className="product-detail__info">
          <h2 className="product-detail__name">
            {" "}
            <Skeleton width={140} />
          </h2>
          <p className="product-detail__price">
            {" "}
            <Skeleton width={140} />
          </p>
          <p className="product-detail__description">
            <Skeleton count={10} />
          </p>
          <p className="product-detail__stock">
              <Skeleton width={90} />
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
     
                  />
                </div>

                {user ? (
                  <button
                    className="product-detail-buy-container__buy"
                  >
                    Add to basket
                  </button>
                ) : (
                  <button
                    className="product-detail-buy-container__buy"
                    disabled
                  >
                    Login to add to basket
                  </button>
                )}
              </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
