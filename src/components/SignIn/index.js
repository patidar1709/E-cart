import React from "react";
import { TextField, Button } from "@mui/material";
import LockIcon from "../../common/LockIcon";
import CustomButton from "../../common/CustomButton";
import { Link } from "react-router-dom";
import { login } from "../../apis/apis";

const SignIn = () => {
  //calling login api to login user on click of singIn
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    login(formProps)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("faliure");
      });
  };

  return (
    <>
      <LockIcon />
      <div style={{ marginBottom: "15px" }}>Sign In</div>

      {/* form for signIn */}
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
            label="Email"
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
          <Button variant="contained" type="submit" style={{ width: "600px" }}>
            SIGN IN
          </Button>
          <Link to="/signUp">
            <CustomButton
              variant="text"
              style={{
                textTransform: "none",
                color: "#681da8",
                textDecoration: "underline",
              }}
              buttonText="Don`t have an account? sign up"
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

export default SignIn;
