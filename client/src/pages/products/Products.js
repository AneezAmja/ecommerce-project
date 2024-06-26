import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.scss";
import Spinner from "../../components/spinner/Spinner";
import { getUser } from "../../features/user/userSlice";
import { getProducts } from "../../features/product/productSlice";
import { useSelector, useDispatch } from "react-redux";
import ProductsSkeleton from "./ProductsSkeleton";

const Products = () => {
  const dispatch = useDispatch();

  const { products, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getUser());
    dispatch(getProducts());
  }, [isError, isSuccess, message, dispatch]);


  return (
    <div className="product-container">
      <section className="category-title-container">
        <h2 className="category-title">Must buy products!</h2>
      </section>

      {isLoading ? (
        <div className="products">
          <ProductsSkeleton items={15} />
        </div>
      ) : (
        <div className="products">
          {[...products] // array is read-only due to the way it's being managed by Redux, so we copy the products
            .sort((a, b) => {
              const idA = a._id || "";
              const idB = b._id || "";
              return idA.localeCompare(idB);
            }) //sorting by id
            .map((product) => (
              <Link to={product._id} className="product" key={product._id}>
                <div className="product__image-container">
                  <img
                    src={product.imageURL}
                    alt={product.name}
                    className="product__image"
                    loading="lazy"
                  />
                </div>
                <h3 className="product__name">{product.name}</h3>
                <p className="product__price">£{product.price}</p>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Products;
