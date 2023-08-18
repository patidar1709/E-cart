import React, { createContext, useContext, useState } from "react";

const ProductDataContext = createContext();

export const useProductDataContext = () => {
  return useContext(ProductDataContext);
};

export const ProductDataProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);

  const setProduct = (data) => {
    setProductData(data);
  };

  return (
    <ProductDataContext.Provider value={{ productData, setProduct }}>
      {children}
    </ProductDataContext.Provider>
  );
};
