import { createReducer } from "@reduxjs/toolkit";

import {
  productCategoryAction,
  productListAction,
  productError,
} from "../actions/product";

const initialState = {
  categories: [],
  productList: [],
  message: {
    categoriesErr: {},
  },
};

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
