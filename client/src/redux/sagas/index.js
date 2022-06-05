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

//#region Profile
function* fetchProfilesSaga(action) {
  try {
    const Profiles = yield call(api.fetchProfiles);
    console.log("[Profiles]", Profiles);
    yield put(actions.getProfiles.getProfilesSuccess(Profiles.data));
  } catch (err) {
    console.err(err);
    yield put(actions.getProfiles.getProfilesFailure(err));
  }
}

function* createProfilesSaga(action) {
  try {
    const Profile = yield call(api.createProfile, action.payload);
    yield put(actions.createProfile.createProfileSuccess(Profile.data));
  } catch (error) {
    yield put(
      actions.createProfile.createProfileFailure(error.response.data)
    );
  }
}

function* updateProfileSaga(action) {
  try {
    const Profile = yield call(api.updateProfile, action.payload);
    yield put(actions.updateProfile.updateProfileSuccess(Profile.data));
  } catch (error) {
    yield put(
      actions.updateProfile.updateProfileFailure(error.response.data)
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
  yield takeLatest(actions.getProvinces.getProvincesRequest, fetchProvinceSaga);
  yield takeLatest(actions.getPlaces.getPlacesRequest, fetchPlaceSaga);
  yield takeLatest(actions.getHotels.getHotelsRequest, fetchHotelSaga);
  yield takeLatest(actions.getFoodAndDrinks.getFoodAndDrinksRequest, fetchFoodAndDrinkSaga);
  yield takeLatest(actions.getAttractions.getAttractionsRequest, fetchAttractionSaga);

}

export default mySaga;
