import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Products.css";
import Spinner from "../../components/spinner/Spinner";
import { getUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

const API_URL = "/api/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUser());
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(API_URL + `/`);
    const productsData = response.data;

    // console.log(productsData);

    setProducts(productsData);
    setLoading(false);
  };

  // if (loading) return <div className="loading">Loading...</div>;
  if (loading) return <Spinner/>;

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
