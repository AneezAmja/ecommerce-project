import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './ProductDetail.css'
import Spinner from "../../components/spinner/Spinner";

const API_URL = "/api/products/";

const ProductDetail = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getProductDetail();
  }, []);

  /* /api/products/:id */
  const getProductDetail = async () => {
    const response = await axios.get(API_URL + `${id}`);
    const productDetailData = response.data;

    // console.log(productDetailData);

    setItem(productDetailData);
    setLoading(false);
  };

  const addToBasket = () => {
    console.log("added to basket")
  }


  if (loading) return <Spinner/>;

  return (
    <div className="product-detail-container">
      <div className="product-detail">

            <div className="product-detail__image-container" key={item._id}>
              <img
                src={item.imageURL}
                alt={item.name}
                className="product-detail__image"
              />
            </div>

            <div className="product-detail__info">
                <h2 className="product-detail__name">{item.name}</h2>
                <p className="product-detail__price">£{item.price}</p>
                <p className="product-detail__description">{item.productDetail.description}</p>
                <p className="product-detail__stock"><i style={{opacity: '0.8'}}>stock quantity: </i><strong>{item.productDetail.stockQuantity}</strong></p>

                <div className="product-detail-buy-container">
                  <div className="quantity-input">    
                    <input className="quantity-amount" type="number" id="quantity" name="quantity" placeholder="0" min="1" />
                  </div>
                    {/* <a href='#' className="product-detail-buy-container__buy">
                        Buy product
                    </a> */}
                    <button onClick={addToBasket} className="product-detail-buy-container__buy">
                        Add to basket 
                    </button>
                </div>
            </div>

      </div>
    </div>
  );
};

export default ProductDetail;
