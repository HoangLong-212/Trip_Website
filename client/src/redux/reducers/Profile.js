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
      return {
        ...state,
        isLoading: true,
      };
    case getType(getProfiles.getProfilesSuccess):
      messageSuccess("lấy thành công")
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getProfiles.getProfilesFailure):
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
      return {
        ...state,
        isLoading: false,
      };
    //#endregion

    default:
      return state;
  }
}
