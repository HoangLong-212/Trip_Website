import { INIT_STATE } from "../../constant";
import { getType, showChooseCollectionModal, hideChooseCollectionModal } from "../actions";

export default function ChooseCollectionModalsReducers(state = INIT_STATE.ChooseCollectionModal, action) {
  switch (action.type) {
    case getType(showChooseCollectionModal):
      return {
        isShow: true,
      };
    case getType(hideChooseCollectionModal):
      return {
        isShow: false,
      };

    default:
      return state;
  }
}
