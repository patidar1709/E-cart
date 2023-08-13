import React, { useState, useEffect } from "react";
import { getProductCategory, getProductList } from "../../../actions/product";
import { useDispatch, useSelector } from "react-redux";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ProductCard from "../ProductCard";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import "./index.css";

const HomePage = () => {
  //state to save value for toggle button which is selected
  const [toggleValue, setToggleValue] = useState("All");

  const dispatch = useDispatch();

  //fetching data from store for categories and products
  const categories = useSelector((s) => s.product.categories);
  const productList = useSelector((s) => s.product.productList);

  const [filteredProductList, setFilteredProductList] = useState(productList);

  //dispatching api to set data in store for product category and product list
  useEffect(() => {
    dispatch(getProductCategory());
    dispatch(getProductList());
  }, []);

  useEffect(() => {
    setFilteredProductList(productList);
  }, [productList]);

  useEffect(() => {
    filterProductData();
  }, [toggleValue]);

  const filterProductData = () => {
    let filterList = [];
    if (toggleValue === "all") {
      setFilteredProductList(productList);
    } else {
      filterList = productList.filter(
        (product) => product.category === toggleValue
      );
      setFilteredProductList(filterList);
    }
  };

  const handleButtonChange = (event, value) => {
    if (value != null) {
      setToggleValue(value);
    }
  };

  const handleSort = (e) => {
    if (e.target.value === "default") {
      return;
    } else if (e.target.value === "phl") {
      const sortedProducts = filteredProductList
        .slice()
        .sort((a, b) => b.price - a.price);
      setFilteredProductList(sortedProducts);
    } else if (e.target.value === "plh") {
      const sortedProducts = filteredProductList
        .slice()
        .sort((a, b) => a.price - b.price);
      setFilteredProductList(sortedProducts);
    }
  };

  return (
    <>
      <ToggleButtonGroup
        value={toggleValue || "all"}
        exclusive
        onChange={handleButtonChange}
        defaultValue="all"
        sx={{ paddingTop: "20px" }}
        aria-label="text alignment"
      >
        <ToggleButton value="all" aria-label="centered">
          All
        </ToggleButton>
        {categories?.length > 0 &&
          categories.map((category, index) => (
            <ToggleButton
              key={index}
              value={category}
              aria-label="left aligned"
            >
              {category}
            </ToggleButton>
          ))}
      </ToggleButtonGroup>
      <div className="filterDiv">
        <div className="filter">sort by</div>
        <div className="filter">
          <FormControl
            sx={{ mb: 3, width: "200px", paddingTop: "12px" }}
            size="small"
          >
            <InputLabel id="demo-simple-select-label">Select...</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{ height: "40px" }}
              label="select..."
              name="category"
              onChange={handleSort}
            >
              <MenuItem value={"default"}>Default</MenuItem>
              <MenuItem value={"plh"}>Price: low to high</MenuItem>
              <MenuItem value={"phl"}>Price: high to low</MenuItem>
              <MenuItem value={"default"}>latest</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="div">
        {filteredProductList?.length > 0 &&
          filteredProductList.map((product) => (
            <div className="card">
              <ProductCard {...product} key={product.id} />
            </div>
          ))}
      </div>
    </>
  );
};

export default HomePage;
