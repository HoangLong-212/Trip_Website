import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";


//region Account
function* fetchAccountsSaga(action) {
  try {
    const Accounts = yield call(api.fetchAccounts);
    // console.log("[Accounts]", Accounts.data);
    yield put(actions.getAccounts.getAccountsSuccess(Accounts.data));
  } catch (err) {
    // console.err(err);
    yield put(actions.getAccounts.getAccountsFailure(err));
  }
}

function* createAccountSaga(action) {
  try {
    const Account = yield call(api.createAccount, action.payload);
    yield put(actions.createAccount.createAccountSuccess(Account.data));
  } catch (error) {
    yield put(
      actions.createAccount.createAccountFailure(error.response.data)
    );
  }
}

function* updateAccountSaga(action) {
  try {
    const Account = yield call(api.updateAccount, action.payload);
    console.log("saga");
    yield put(actions.updateAccount.updateAccountSuccess(Account.data));
  } catch (error) {
    yield put(
      actions.updateAccount.updateAccountFailure(error.response.data)
    );
  }
}

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* fetchProfileSaga(action) {
  try {
    const profiles = yield call(api.fetchProfile);

    yield put(actions.getProfiles.getProfilesSuccess(profiles.data));
  } catch (error) {
    yield put(actions.getProfiles.getProfilesFailure(error));
  }
}

function* fetchProvinceSaga(action) {
  try {
    const provinces = yield call(api.fetchProvince);

    yield put(actions.getProvinces.getProvincesSuccess(provinces.data));
  } catch (error) {
    yield put(actions.getProvinces.getProvincesFailure(error));
  }
}

function* fetchPlaceSaga(action) {
  try {
    const places = yield call(api.fetchPlace);

    yield put(actions.getPlaces.getPlacesSuccess(places.data));
  } catch (error) {
    yield put(actions.getPlaces.getPlacesFailure(error));
  }
}

function* fetchHotelSaga(action) {
  try {
    const hotels = yield call(api.fetchHotel);

    yield put(actions.getHotels.getHotelsSuccess(hotels.data));
  } catch (error) {
    yield put(actions.getHotels.getHotelsFailure(error));
  }
}


function* fetchFoodAndDrinkSaga(action) {
  try {
    const foodAndDrink = yield call(api.fetchFoodAndDrink);

    yield put(actions.getFoodAndDrinks.getFoodAndDrinksSuccess(foodAndDrink.data));
  } catch (error) {
    yield put(actions.getFoodAndDrinks.getFoodAndDrinksFailure(error));
  }
}

function* fetchAttractionSaga(action) {
  try {
    const attractions = yield call(api.fetchAttraction);

    yield put(actions.getAttractions.getAttractionsSuccess(attractions.data));
  } catch (error) {
    yield put(actions.getAttractions.getAttractionsFailure(error));
  }
}

function* fetchMyTripsSaga(action) {
  try {
    const myTrip = yield call(api.fetchMyTrip);

    yield put(actions.getMyTrips.getMyTripsSuccess(myTrip.data));
  } catch (error) {
    yield put(actions.getMyTrips.getMyTripsFailure(error));
  }
}

function* fetchCreateCollectionsSaga(action) {
  try {
    const collections = yield call(api.createCollections, action.payload);

    yield put(actions.createCollections.createCollectionsSuccess(collections.data));
  } catch (error) {
    yield put(
      actions.createCollections.createCollectionsFailure(error.response.data)
    );
  }
}

function* fetchCreatePlaceListsSaga(action) {
  try {
    const placeList = yield call(api.createPlaceLists, action.payload);

    yield put(actions.createPlaceLists.createPlaceListsSuccess(placeList.data));
  } catch (error) {
    yield put(
      actions.createPlaceLists.createPlaceListsFailure(error.response.data)
    );
  }
}


function* mySaga() {

    //#region Account
    yield takeLatest(
      actions.getAccounts.getAccountsRequest,
      fetchAccountsSaga
    );
  
    yield takeLatest(
      actions.createAccount.createAccountRequest,
      createAccountSaga
    );
  
    yield takeLatest(
      actions.updateAccount.updateAccountRequest,
      updateAccountSaga
    );

    
  //#region Profile
  yield takeLatest(
    actions.getProfiles.getProfilesRequest,
    fetchProfilesSaga
  );

  yield takeLatest(
    actions.createProfile.createProfileRequest,
    createProfilesSaga
  );

  yield takeLatest(
    actions.updateProfile.updateProfileRequest,
    updateProfileSaga
  );
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);

  yield takeLatest(actions.getProfiles.getProfilesRequest, fetchProfileSaga);

  yield takeLatest(actions.getProvinces.getProvincesRequest, fetchProvinceSaga);

  yield takeLatest(actions.getPlaces.getPlacesRequest, fetchPlaceSaga);

  yield takeLatest(actions.getHotels.getHotelsRequest, fetchHotelSaga);

  yield takeLatest(actions.getFoodAndDrinks.getFoodAndDrinksRequest, fetchFoodAndDrinkSaga);

  yield takeLatest(actions.getAttractions.getAttractionsRequest, fetchAttractionSaga);
  
  yield takeLatest(actions.getMyTrips.getMyTripsRequest, fetchMyTripsSaga);
  yield takeLatest(actions.createCollections.createCollectionsRequest, fetchCreateCollectionsSaga);
  yield takeLatest(actions.createPlaceLists.createPlaceListsRequest, fetchCreatePlaceListsSaga);



}

export default mySaga;
