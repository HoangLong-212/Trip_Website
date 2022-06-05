// import { messageError, messageSuccess } from "../../components/message";
import { INIT_STATE } from "../../constant";
import {
  createAccount,
  getAccounts,
  getType,
  updateAccount,
} from "../actions";

export default function AccountsReducer(state = INIT_STATE.Accounts, action) {
  switch (action.type) {
    //#region get
    case getType(getAccounts.getAccountsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getAccounts.getAccountsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getAccounts.getAccountsFailure):
      return {
        ...state,
        isLoading: false,
      };
    //#endregion

    //#region create
    case getType(createAccount.createAccountSuccess):
    //   messageSuccess("Thêm mới tài khoản thành công");
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    case getType(createAccount.createAccountFailure):
    //   messageError(action.payload);
      return {
        ...state,
        isLoading: false,
      };
    //#endregion

    //#region update
    case getType(updateAccount.updateAccountSuccess):
    //   messageSuccess("Cập nhật thành công");
      return {
        ...state,
        isLoading: false,
        data: state.data.map((Account) =>
          Account._id === action.payload._id ? action.payload : Account
        ),
      };
    case getType(updateAccount.updateAccountFailure):
    //   messageError(action.payload);
      return {
        ...state,
        isLoading: false,
      };
    //#endregion

    default:
      return state;
  }
}
