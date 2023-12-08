import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

const API_URL = `${apiURL}/api/products`;

// Get all products
const getProducts = async () => {
  const response = await axios.get(API_URL + `/`);

  return response.data;
};

// Get indivdual product
const getIndividualProduct = async (id) => {
  const response = await axios.get(API_URL + `/${id}`);

  return response.data;
};

// Purchase multiple products
const purchaseProducts = async (productData) => {

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

  
  const res = await response.post(API_URL + `/purchase`, productData);

  return res.data;
};



const productService = {
  getProducts,
  getIndividualProduct,
  purchaseProducts,
};

export default productService;
