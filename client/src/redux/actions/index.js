import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const showModal = createAction('SHOW_MODAL')
export const hideModal = createAction('HIDE_MODAL')

//#region TaiKhoan
export const getAccounts = createActions({
  getAccountsRequest: undefined,
  getAccountsSuccess: (payload) => payload,
  getAccountsFailure: (err) => err,
});

export const createAccount = createActions({
  createAccountRequest: (payload) => payload,
  createAccountSuccess: (payload) => payload,
  createAccountFailure: (err) => err,
});

export const updateAccount = createActions({
  updateAccountRequest: (payload) => payload,
  updateAccountSuccess: (payload) => payload,
  updateAccountFailure: (err) => err,
  
});
export const showAccountModal = createAction("SHOW_ACCOUNT_MODAL");
export const hideAccountModal = createAction("HIDE_ACCOUNT_MODAL");

//#region Profile
export const getProfiles = createActions({
  getProfilesRequest: undefined,
  getProfilesSuccess: (payload) => payload,
  getProfilesFailure: (err) => err,
});

export const createProfile = createActions({
  createProfileRequest: (payload) => payload,
  createProfileSuccess: (payload) => payload,
  createProfileFailure: (err) => err,
});

export const updateProfile = createActions({
  updateProfileRequest: (payload) => payload,
  updateProfileSuccess: (payload) => payload,
  updateProfileFailure: (err) => err,
});

export const showProfileModal = createAction("SHOW_PROFILE_MODAL");
export const hideProfileModal = createAction("HIDE_PROFILE_MODAL");


export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload) => payload,
  getPostsFailure: (err) => err,
});

export const getProvinces = createActions({
  getProvincesRequest: undefined,
  getProvincesSuccess: (payload) => payload,
  getProvincesFailure: (err) => err,
});

export const getPlaces = createActions({
  getPlacesRequest: undefined,
  getPlacesSuccess: (payload) => payload,
  getPlacesFailure: (err) => err,
});

export const getHotels = createActions({
  getHotelsRequest: undefined,
  getHotelsSuccess: (payload) => payload,
  getHotelsFailure: (err) => err,
});

export const getFoodAndDrinks = createActions({
  getFoodAndDrinksRequest: undefined,
  getFoodAndDrinksSuccess: (payload) => payload,
  getFoodAndDrinksFailure: (err) => err,
});

export const getAttractions = createActions({
  getAttractionsRequest: undefined,
  getAttractionsSuccess: (payload) => payload,
  getAttractionsFailure: (err) => err,
});

