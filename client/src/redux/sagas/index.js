import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* fetchProvinceSaga(action) {
  try {
    const provinces = yield call(api.fetchProvince);

    yield put(actions.getProvinces.getProvincesSuccess(provinces.data));
  } catch (error) {
    yield put(actions.getProvinces.getProvincesFailure(error.response.data));
  }
}

function* fetchPlaceSaga(action) {
  try {
    const places = yield call(api.fetchPlace);

    yield put(actions.getPlaces.getPlacesSuccess(places.data));
  } catch (error) {
    yield put(actions.getPlaces.getPlacesFailure(error.response.data));
  }
}

function* fetchHotelSaga(action) {
  try {
    const hotels = yield call(api.fetchHotel);

    yield put(actions.getHotels.getHotelsSuccess(hotels.data));
  } catch (error) {
    yield put(actions.getHotels.getHotelsFailure(error.response.data));
  }
}


function* fetchFoodAndDrinkSaga(action) {
  try {
    const foodAndDrink = yield call(api.fetchFoodAndDrink);

    yield put(actions.getFoodAndDrinks.getFoodAndDrinksSuccess(foodAndDrink.data));
  } catch (error) {
    yield put(actions.getFoodAndDrinks.getFoodAndDrinksFailure(error.response.data));
  }
}


function* fetchAttractionSaga(action) {
  try {
    const attractions = yield call(api.fetchAttraction);

    yield put(actions.getAttractions.getAttractionsSuccess(attractions.data));
  } catch (error) {
    yield put(actions.getAttractions.getAttractionsFailure(error.response.data));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.getProvinces.getProvincesRequest, fetchProvinceSaga);
  yield takeLatest(actions.getPlaces.getPlacesRequest, fetchPlaceSaga);
  yield takeLatest(actions.getHotels.getHotelsRequest, fetchHotelSaga);
  yield takeLatest(actions.getFoodAndDrinks.getFoodAndDrinksRequest, fetchFoodAndDrinkSaga);
  yield takeLatest(actions.getAttractions.getAttractionsRequest, fetchAttractionSaga);

}

export default mySaga;
