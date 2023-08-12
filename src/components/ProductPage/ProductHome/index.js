import React, { useState, useEffect } from "react";
import { getProductCategory, getProductList } from "../../../actions/product";
import { useDispatch, useSelector } from "react-redux";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ProductCard from "../ProductCard";
import "./index.css";

const HomePage = () => {
  //state to save value for toggle button which is selected
  const [toggleValue, setToggleValue] = useState("All");
  const [filteredProductList, setFilteredProductList] = useState([]);

  const dispatch = useDispatch();

  //fetching data from store for categories and products
  const categories = useSelector((s) => s.product.categories);
  const productList = useSelector((s) => s.product.productList);

  //dispatching api to set data in store for product category and product list
  useEffect(() => {
    dispatch(getProductCategory());
    dispatch(getProductList());
  }, []);

  const handleButtonChange = (event, value) => {
    if (value != null) {
      setToggleValue(value);
    }
  };

  console.log(productList);

  return (
    <>
      <ToggleButtonGroup
        value={toggleValue}
        exclusive
        onChange={handleButtonChange}
        sx={{ paddingTop: "20px" }}
        aria-label="text alignment"
      >
        <ToggleButton value="all" aria-label="centered">
          All
        </ToggleButton>
        {categories?.length > 0 &&
          categories.map((category, index) => (
            // console.log(category)
            <ToggleButton
              key={index}
              value={category}
              aria-label="left aligned"
            >
              {category}
            </ToggleButton>
          ))}
      </ToggleButtonGroup>
      <div className="div">
        {productList?.length > 0 &&
          productList.map((product) => (
            <div className="card">
              <ProductCard {...product} key={product.id} />
            </div>
          ))}
      </div>
    </>
  );
};

export default HomePage;
