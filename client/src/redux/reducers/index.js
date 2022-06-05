import { combineReducers } from "redux";
import posts from "./posts";
import Modal from "./Modal";
import Province from "./Province";
import Place from "./Place";
import Hotel from "./Hotel";
import FoodAndDrink from "./FoodAndDrink";
import Attraction from "./Attraction";
import Auth from "./Auth"
import Account from "./Account"
import Profile from "./Profile"


export default combineReducers({
  posts,
  Modal,
  Province,
  Place,
  Hotel,
  FoodAndDrink,
  Attraction,
  Account,
  Profile,
});
