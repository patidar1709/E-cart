import React, { useEffect } from "react";
import { getProduct } from "../../../apis/apis";
import { useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useProductDataContext } from "../ProductDataContext";
import "./index.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { productData, setProduct } = useProductDataContext();

  useEffect(() => {
    getProduct(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleQuantity = (e) => {
    setProduct({ ...productData, quantity: e.target.value });
  };

  return (
    <div className="container">
      <div className="image">
        <img src={productData?.imageUrl} width="500px" alt="product" />
      </div>
      <div className="content">
        <div className="div1">
          <h1>{productData?.name}</h1>
          <div className="quantity">
            Quantity: {productData?.availableItems}
          </div>
        </div>
        <div className="category">
          Category: <b>{productData?.category}</b>
        </div>
        <div className="description">{productData?.description}</div>
        <div className="price"> ₹ {productData?.price}</div>
        <div style={{ textAlign: "left" }}>
          <TextField
            label="Enter Quantity"
            required
            variant="outlined"
            color="secondary"
            type="number"
            sx={{ width: "300px" }}
            onChange={handleQuantity}
            width="800px"
            name="quantity"
            value={productData?.quantity || ""}
          />
        </div>
        <div style={{ textAlign: "left", paddingTop: "20px" }}>
          <Link to={{ pathname: "/order", state: { productData } }}>
            <Button
              variant="contained"
              sx={{ color: "white", background: "#3f51b5" }}
            >
              Place order
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
