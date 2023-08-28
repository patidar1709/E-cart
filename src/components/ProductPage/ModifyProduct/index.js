import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { modifyProduct } from "../../../apis/apis";
import { useLocation } from "react-router-dom";
import { useToast } from "../../../common/useToast";

const ModifyProduct = () => {
  const location = useLocation();
  const toast = useToast();
  const receivedData = location.state?.data || {};
  const {
    id,
    imageUrl,
    name,
    price,
    description,
    category,
    manufacturer,
    availableItems,
  } = receivedData;
  const [updateName, setName] = useState(name);
  const [updateImageUrl, setImageUrl] = useState(imageUrl);
  const [updatePrice, setPrice] = useState(price);
  const [updateDescription, setDescription] = useState(description);
  const [updateCategory, setCategory] = useState(category);
  const [updateManufacturer, setManufacturer] = useState(manufacturer);
  const [updateAvailableItems, setAvailableItems] = useState(availableItems);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleImageUrl = (e) => {
    setImageUrl(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleManufacturer = (e) => {
    setManufacturer(e.target.value);
  };

  const handleAvailableItems = (e) => {
    setAvailableItems(e.target.value);
  };

  //function to call post api to signup user when form is submitted
  const handelSubmit = (e) => {
    e.preventDefault();
    const fromProps = new FormData(e.target);
    const payload = Object.fromEntries(fromProps);
    payload.price = parseInt(payload.price);
    payload.availableItems = parseInt(payload.availableItems);
    payload.id = id;
    modifyProduct(id, payload)
      .then(() => {
        toast.showSuccess("Product modified successfully");
      })
      .catch(() => {
        toast.showError(
          "Some error occured while modifying the product please try again"
        );
      });
  };

  return (
    <>
      {/* lock icon for form   */}
      <h2 style={{ marginBottom: "15px", marginTop: "50px" }}>
        Modify Product
      </h2>

      {/* form and form inpit fields */}
      <form onSubmit={handelSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Name"
            required
            variant="outlined"
            color="secondary"
            type="text"
            value={updateName || ""}
            sx={{ mb: 3, width: "600px" }}
            width="800px"
            name="name"
            onChange={handleName}
          />
          <FormControl sx={{ mb: 3, width: "600px" }} size="small">
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{ height: "56px" }}
              value={updateCategory || ""}
              label="category"
              name="category"
              onChange={handleCategory}
            >
              <MenuItem value={"appereal"}>Appereal</MenuItem>
              <MenuItem value={"electronics"}>electronics</MenuItem>
              <MenuItem value={"footwear"}>footwear</MenuItem>
              <MenuItem value={"personalCare"}>Personal Care</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Manufacturer"
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "600px" }}
            width="800px"
            value={updateManufacturer || ""}
            onChange={handleManufacturer}
            name="manufacturer"
          />
          <TextField
            label="Available Items"
            required
            variant="outlined"
            color="secondary"
            type="number"
            sx={{ mb: 3, width: "600px" }}
            width="800px"
            value={updateAvailableItems || ""}
            name="availableItems"
            onChange={handleAvailableItems}
          />

          <TextField
            label="Price"
            required
            variant="outlined"
            color="secondary"
            type="number"
            name="price"
            value={updatePrice || ""}
            sx={{ mb: 3, width: "600px" }}
            onChange={handlePrice}
          />
          <TextField
            label="Image URL"
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "600px" }}
            name="imageUrl"
            value={updateImageUrl || ""}
            width="800px"
            onChange={handleImageUrl}
          />
          <TextField
            label="Product Description"
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "600px" }}
            width="800px"
            value={updateDescription || ""}
            name="description"
            onChange={handleDescription}
          />
          <Button variant="contained" type="submit" style={{ width: "600px" }}>
            Modify product
          </Button>
        </div>
      </form>
    </>
  );
};

export default ModifyProduct;
