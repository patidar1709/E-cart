//root reducer and redux store setup
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productReducer from "../reducers/product.reducer";
const appReducer = combineReducers({
  product: productReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export { store };
