export const AuthReducer = (state, action) => {
  const {
    type,
    payload: { isAuthenticated, user, profile, myTrip },
  } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        authLoading: false,
        isAuthenticated,
        user,
        profile,
        myTrip,
      };

    default:
      return state;
  }
};
