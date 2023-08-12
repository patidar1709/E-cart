import { createAction } from "@reduxjs/toolkit";
import { productCategories, productList } from "../apis/apis";

export const productCategoryAction = createAction("SET_CATEGORIES", (data) => ({
  payload: data,
}));

export const productListAction = createAction("SET_PRODUCTS", (data) => ({
  payload: data,
}));

export const productError = createAction("SET_MESSAGES", (data) => ({
  payload: data,
}));

export const getProductCategory = () => (dispatch) => {
  productCategories()
    .then((res) => {
      dispatch(productCategoryAction(res.data));
    })
    .catch((err) => {
      dispatch(productError({ categoriesError: err.res.data }));
    });
};

export const getProductList = () => (dispatch) => {
  productList()
    .then((res) => {
      dispatch(productListAction(res.data));
    })
    .catch((err) => {
      dispatch(productError({ productListError: err.res.data }));
    });
};
