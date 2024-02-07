import axios from "axios";


const apiURL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL_PROD
  : process.env.REACT_APP_API_URL_LOCAL;

const API_URL = `${apiURL}/api/cart/`;

// Get all Cart Items
const getCart = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return null; 
  }

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error; 
  }
};


// Adding item to cart
const addToCart = async (cartData) => {
  const user = JSON.parse(localStorage.getItem("user"));


  if (!user) {
    // throw new Error("User not available");
    return null; 
  }

  const response = axios.create({
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  const res = await response.post(API_URL + `addToCart`, cartData);

  return res.data;
};

// Remove item for Cart
const removeFromCart = async (cartData) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = axios.create({
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  const res = await response.post(API_URL + `removeFromCart`, cartData);

  return res.data;
};

const Service = {
  getCart,
  addToCart,
  removeFromCart,
};

export default Service;
