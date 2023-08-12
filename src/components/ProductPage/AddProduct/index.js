import React from "react";
import { TextField, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { addProduct } from "../../../apis/apis";

// import { signUp } from "../../apis/apis";

const AddProduct = () => {
  //function to call post api to signup user when form is submitted
  const handelSubmit = (e) => {
    e.preventDefault();
    const fromProps = new FormData(e.target);
    const payload = Object.fromEntries(fromProps);
    payload.price = parseInt(payload.price);
    payload.availableItems = parseInt(payload.availableItems);
    addProduct(payload)
      .then(() => {
        console.log("added product");
      })
      .catch(() => {
        console.log("removed product");
      });
  };

  return (
    <>
      {/* lock icon for form   */}
      <h2 style={{ marginBottom: "15px", marginTop: "50px" }}>Add Product</h2>

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
            sx={{ mb: 3, width: "600px" }}
            width="800px"
            name="name"
          />
          <FormControl sx={{ mb: 3, width: "600px" }} size="small">
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{ height: "56px" }}
              //   value={age}
              label="category"
              name="category"
              //   onChange={handleChange}
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
            name="availableItems"
          />

          <TextField
            label="Price"
            required
            variant="outlined"
            color="secondary"
            type="number"
            name="price"
            sx={{ mb: 3, width: "600px" }}
          />
          <TextField
            label="Image URL"
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "600px" }}
            name="imageUrl"
            width="800px"
          />
          <TextField
            label="Product Description"
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "600px" }}
            width="800px"
            name="description"
          />
          <Button variant="contained" type="submit" style={{ width: "600px" }}>
            Save product
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
