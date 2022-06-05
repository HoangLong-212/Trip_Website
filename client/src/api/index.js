import axios from "axios";

const URL = "http://localhost:5000";

export const fetchPosts = () => axios.get(`${URL}/posts`);
// export const createUser = (payload) => axios.post(`${URL}/Users`, payload);
// export const updateUser = (payload) => axios.patch(`${URL}/Users/${payload._id}`, payload);

export const fetchProvince = () => axios.get(`${URL}/province`);

export const fetchPlace = () => axios.get(`${URL}/place`);

export const fetchHotel = () => axios.get(`${URL}/hotel`);

export const fetchFoodAndDrink = () => axios.get(`${URL}/foodAndDrink`);

export const fetchAttraction = () => axios.get(`${URL}/attraction`);

//#region Tai khoan
export const fetchAccounts = () => axios.get(`${URL}/Accounts`);

export const createAccount = (payload) =>
  axios.post(`${URL}/Accounts`, payload);

export const updateAccount = (payload) =>
  axios.patch(`${URL}/Accounts/${payload._id}`, payload);

  //#region Auth
export const signInAccount = (userForm) =>
  axios.post(`${URL}/Accounts/Auth`, userForm);

export const verifyAuthToken = () => axios.get(`${URL}/Accounts/Auth`);

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

//#region Profile
export const fetchProfiles = () => axios.get(`${URL}/Profiles`);

export const createProfile = (payload) =>
  axios.post(`${URL}/Profiles`, payload);

export const updateProfile = (payload) =>
  axios.patch(`${URL}/Profiles/${payload._id}`, payload);

    