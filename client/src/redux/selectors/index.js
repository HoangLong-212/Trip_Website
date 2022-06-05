export const postsState$ = (state) => state.posts.data;

//#endregion

//Account
export const AccountsState$ = (state) => state.Account.data;
//Modal

export const modalState$ =(state) => state.Modal;

//Province
export const provincesState$ =(state) => state.Province.data;

//Place
export const placesState$ =(state) => state.Place.data;

//Province
export const hotelsState$ =(state) => state.Hotel.data;

//Province
export const foodAndDrinksState$ =(state) => state.FoodAndDrink.data;

//Province
export const attractionsState$ =(state) => state.Attraction.data;
//Profile
export const isLoadingProfilesState$ = (state) => state.Profile.isLoading;
export const ProfilesState$ = (state) => state.Profile.data;
export const ProfileModalState$ = (state) => state.ProfileModal;