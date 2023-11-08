import axios from "axios";

const API_URL = "/api/cart/";

// Get all Cart Items
const getCart = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = axios.create({
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  const res = await response.get(API_URL);

  return res.data;
};

// Adding item to cart
const addToCart = async (cartData) => {
  const user = JSON.parse(localStorage.getItem("user"));

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

// Update single cart item
const updatingCartSingle = async () => {
  const response = await axios.put(API_URL + `updatingCartSingle`);

  return response.data;
};

const Service = {
  getCart,
  addToCart,
  removeFromCart,
  updatingCartSingle,
};

export default Service;
