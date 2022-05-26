import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const showModal = createAction('SHOW_MODAL')
export const hideModal = createAction('HIDE_MODAL')


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

