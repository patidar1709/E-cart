// product reducer implementation
import { createReducer } from "@reduxjs/toolkit";

import {
  productCategoryAction,
  productListAction,
  productError,
} from "../actions/product";

//inital values for store
const initialState = {
  categories: [],
  productList: [],
  message: {
    categoriesErr: {},
  },
};

//switch case to update values in redux store
const productReducer = createReducer(initialState, {
  [productCategoryAction]: (state, action) => {
    state.categories = action.payload;
  },
  [productListAction]: (state, action) => {
    state.productList = action.payload;
  },
  [productError]: (state, action) => {
    state.messages = { ...state.messages, ...action.payload };
  },
});

export default productReducer;
