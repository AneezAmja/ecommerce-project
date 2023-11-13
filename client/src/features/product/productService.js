import axios from "axios";

const API_URL = "/api/products";

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

// Purchase a  product
const purchaseProduct = async (productData) => {
  const response = await axios.post(API_URL + `/purchase`, productData);

  return response.data;
};



const productService = {
  getProducts,
  getIndividualProduct,
  purchaseProduct
};

export default productService;
