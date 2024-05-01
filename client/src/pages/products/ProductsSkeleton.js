import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Products.scss";

const ProductsSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((i) => (
      <div className="product" key={i}>
        <div className="product__image-container">
          <Skeleton style={{ height: '100%', left: 0, objectFit: 'cover', position: 'absolute', top: 0, width: '100%' }} />
        </div>
          
          <h3 className="product__name product__name--loading">
            <Skeleton width={140} />
          </h3>
          <p className="product__price">
            <Skeleton width={100} height={10}/>
          </p>
      </div>
    ));
};

export default ProductsSkeleton;
