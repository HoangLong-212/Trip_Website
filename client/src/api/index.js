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


