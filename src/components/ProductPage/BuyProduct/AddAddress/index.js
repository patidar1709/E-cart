import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { saveAddress } from "../../../../apis/apis";
import { getAddress } from "../../../../apis/apis";

const AddAddress = ({ setAddress }) => {
  const [addressList, setAddressList] = useState([]);
  const [keyValueAddress, setKeyValueAddress] = useState([]);

  //api call to fetch address
  useEffect(() => {
    getAddress()
      .then((res) => {
        setAddressList(res.data);
      })
      .catch(() => {
        console.log("some error occured");
      });
  }, []);

  useEffect(() => {
    keyValue();
  }, [addressList]);

  //address map for select dropdown
  const keyValue = () => {
    const addressListMap = [];
    addressList.map((address) => {
      const formattedString = Object.entries(address)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
      addressListMap.push({ key: formattedString, value: formattedString });
    });
    setKeyValueAddress(addressListMap);
  };

  const setAddressValue = (e) => {
    setAddress(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const fromProps = new FormData(e.target);
    const payload = Object.fromEntries(fromProps);
    payload["user"] = "64d78759a0d98e3892383e91";
    saveAddress(payload)
      .then(() => {
        console.log("address saved");
        setAddress(payload);
      })
      .catch(() => {
        console.log("address not saved");
      });
  };
  return (
    <div>
      <div>sort by</div>
      <div>
        <FormControl
          sx={{
            mb: 3,
            width: "600px",
            paddingTop: "12px",
          }}
          size="small"
        >
          <InputLabel id="demo-simple-select-label">Select...</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{ height: "40px" }}
            label="select..."
            name="category"
            onChange={setAddressValue}
          >
            {keyValueAddress?.map((add) => (
              <MenuItem value={add.value}>{add.key}</MenuItem>
            ))}
            {/* <MenuItem value={"default"}>Default</MenuItem>
            <MenuItem value={"plh"}>Price: low to high</MenuItem>
            <MenuItem value={"phl"}>Price: high to low</MenuItem>
            <MenuItem value={"default"}>latest</MenuItem> */}
          </Select>
        </FormControl>
      </div>
      --OR--
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
            sx={{ mb: 3, width: "500px" }}
            name="name"
          />
          <TextField
            label="Contact Number"
            required
            variant="outlined"
            color="secondary"
            type="number"
            sx={{ mb: 3, width: "500px" }}
            name="contactNumber"
          />

          <TextField
            label="Street"
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "500px" }}
            width="800px"
            name="street"
          />
          <TextField
            label="City"
            required
            variant="outlined"
            color="secondary"
            type="text"
            name="city"
            sx={{ mb: 3, width: "500px" }}
          />
          <TextField
            label="State"
            variant="outlined"
            color="secondary"
            required
            type="text"
            sx={{ mb: 3, width: "500px" }}
            name="state"
          />
          <TextField
            label="Landmark"
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "500px" }}
            name="landmark"
          />
          <TextField
            label="Zip Code"
            required
            variant="outlined"
            color="secondary"
            type="number"
            sx={{ mb: 3, width: "500px" }}
            name="zipcode"
          />
          <Button variant="contained" type="submit" style={{ width: "500px" }}>
            Save Address
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddAddress;
