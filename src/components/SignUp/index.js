import React from "react";
import { TextField, Button } from "@mui/material";
import LockIcon from "../../common/LockIcon";
import CustomButton from "../../common/CustomButton";
import { Link } from "react-router-dom";
import { signUp } from "../../apis/apis";

const SignUp = () => {
  //function to call post api to signup user when form is submitted
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = Object.fromEntries(data);
    payload.role = ["USER"];
    signUp(payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* lock icon for form   */}
      <LockIcon />
      <div style={{ marginBottom: "15px" }}>Sign Up</div>

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
            label="First Name"
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "600px" }}
            width="800px"
            name="firstName"
          />
          <TextField
            label="Last Name"
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "600px" }}
            width="800px"
            name="lastName"
          />
          <TextField
            label="Email Address"
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{ mb: 3, width: "600px" }}
            width="800px"
            name="email"
          />

          <TextField
            label="Password"
            required
            variant="outlined"
            color="secondary"
            type="password"
            name="password"
            sx={{ mb: 3, width: "600px" }}
          />
          <TextField
            label="Confirm Password"
            required
            variant="outlined"
            color="secondary"
            type="password"
            sx={{ mb: 3, width: "600px" }}
            width="800px"
          />
          <TextField
            label="Contact Number"
            required
            variant="outlined"
            color="secondary"
            type="number"
            sx={{ mb: 3, width: "600px" }}
            width="800px"
            name="contactNumber"
          />
          <Button variant="contained" type="submit" style={{ width: "600px" }}>
            SIGN UP
          </Button>
          <Link to="/login">
            <CustomButton
              variant="text"
              style={{
                textTransform: "none",
                color: "#681da8",
                textDecoration: "underline",
              }}
              buttonText="Already have an account? sign in"
            />
          </Link>
        </div>
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: "50px",
          color: "grey",
        }}
      >
        Copyright @{" "}
        <CustomButton
          variant="text"
          style={{
            textTransform: "none",
            color: "#681da8",
            textDecoration: "underline",
          }}
          buttonText="upGrad"
        />{" "}
        2021{" "}
      </div>
    </>
  );
};

export default SignUp;
