export default function AuthReducer(state, action) {
    const {
      type,
      payload: { isAuthenticated, Account },
    } = action;
  
    switch (type) {
      case "SET_AUTH":
        return {
          ...state,
          authLoading: false,
          isAuthenticated,
          Account,
        };
      default:
        return state;
    }
  }
  