import axios from "axios";

const apiURL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL_PROD
  : process.env.REACT_APP_API_URL_LOCAL;

const API_URL = `${apiURL}/api/users/`;

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Get the current user
const getUser = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = axios.create({
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  const res = await response.get(API_URL + "me");


  // Extract profileImageURL from the API response and return it along with other user data
  const { profileImageURL, ...userData } = res.data;

  return { ...userData, profileImageURL };

};

// upload the user's avatar
const uploadAvatar = async (formData) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = axios.create({
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  const res = await response.post(API_URL + "upload-avatar", formData);

  const { profileImageURL, ...userData } = res.data;

  return { ...userData, profileImageURL };
};

// updating the user's email
const updateUserEmail = async (formData) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = axios.create({
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  const res = await response.put(API_URL + "update-email", formData);

  const { email, ...userData } = res.data;

  return { ...userData, email };
};

// updating the user's password
// const updateUserPassword = async (formData) => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   const response = axios.create({
//     headers: {
//       Authorization: `Bearer ${user.token}`,
//     },
//   });

//   const res = await response.put(API_URL + "update-password", formData);

//   const { email, ...userData } = res.data;

//   return { ...userData, email };
// };

// logout user
const logout = async () => {
  localStorage.removeItem("user");
};

const userService = {
  register,
  logout,
  getUser,
  uploadAvatar,
  updateUserEmail,
  // updateUserPassword,
  login,
};

export default userService;
