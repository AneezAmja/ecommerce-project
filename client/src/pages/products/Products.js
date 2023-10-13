import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Products.css";
import Spinner from "../../components/spinner/Spinner";
import { getUser } from "../../features/user/userSlice";
import { getProducts } from "../../features/product/productSlice";
import { useSelector, useDispatch } from "react-redux";


const Products = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { products, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.products
  );


  useEffect(() => {
    dispatch(getUser());
    dispatch(getProducts())
  }, [isError, isSuccess, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="product-container">
      <section className="category-title-container">
        <h1 className="category-title">Must buy products!</h1>
      </section>

      <div className="products">
        {products.map((product) => (
          <Link to={product._id} className="product" key={product._id}>
            <div className="product__image-container">
              <img
                src={product.imageURL}
                alt={product.name}
                className="product__image"
              />
            </div>
            <h3 className="product__name">{product.name}</h3>
            <p className="product__price">£{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
