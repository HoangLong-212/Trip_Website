import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";
import { useSelector } from "react-redux";

function* fetchPostSaga(action) {
    const posts = yield call(api.fetchPosts);
    console.log("[posts]", posts);
//   try {
//     const posts = yield call(api.fetchPosts);
//     yield put(actions.getPosts.getPostsSuccess(posts.data));
//   } catch (error) {
//     yield put(actions.getPosts.getPostsFailure(error.response.data));
//   }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
}

export default mySaga;
