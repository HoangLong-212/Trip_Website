<<<<<<< HEAD
import { messageError, messageSuccess } from "../../components/message";
import { INIT_STATE } from "../../constant";
import {
  createProfile,
  getProfiles,
  getType,
  updateProfile,
} from "../actions";

export default function ProfilesReducer(state = INIT_STATE.Profiles, action) {
  switch (action.type) {
    //#region get
    case getType(getProfiles.getProfilesRequest):
      messageSuccess("Đã gửi yêu cầu")
=======
import { INIT_STATE } from "../../constant";
import { getProfiles, getType } from "../actions";

export default function profileReducers(state = INIT_STATE.Profile, action) {
  switch (action.type) {
    case getType(getProfiles.getProfilesRequest):
>>>>>>> 789706a49daef8418f2756b81e8f93661e7b2c10
      return {
        ...state,
        isLoading: true,
      };
    case getType(getProfiles.getProfilesSuccess):
<<<<<<< HEAD
      messageSuccess("lấy thành công")
=======

>>>>>>> 789706a49daef8418f2756b81e8f93661e7b2c10
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getProfiles.getProfilesFailure):
<<<<<<< HEAD
      messageError("Không lấy được")
      return {
        ...state,
        isLoading: false,
      };
    //#endregion

    //#region create
    case getType(createProfile.createProfileSuccess):
      messageSuccess("Thêm mới thành công");
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    case getType(createProfile.createProfileFailure):
      messageError(action.payload);
      return {
        ...state,
        isLoading: false,
      };
    //#endregion

    //#region update
    case getType(updateProfile.updateProfileSuccess):
      messageSuccess("Chỉnh sửa thành công");
      return {
        ...state,
        isLoading: false,
        data: state.data.map((Profile) =>
          Profile._id === action.payload._id ? action.payload : Profile
        ),
      };
    case getType(updateProfile.updateProfileFailure):
      messageError(action.payload);
=======

>>>>>>> 789706a49daef8418f2756b81e8f93661e7b2c10
      return {
        ...state,
        isLoading: false,
      };
<<<<<<< HEAD
    //#endregion
=======
>>>>>>> 789706a49daef8418f2756b81e8f93661e7b2c10

    default:
      return state;
  }
}
