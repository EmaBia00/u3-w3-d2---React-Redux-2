// Vecchio store ESEMPIO:

// import { configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";

// const store = configureStore({
//   reducer: mainReducer
// });

// export default store;

// STORE AGGIORNATO
import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import searchReducer from "../reducers/searchReducer";

const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
    search: searchReducer
  }
});

export default store;
