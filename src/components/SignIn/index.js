import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import LockIcon from "../../common/LockIcon";
import CustomButton from "../../common/CustomButton";
import { Link } from "react-router-dom";
import { login } from "../../apis/apis";
import { useToast } from "../../common/useToast";

//sign In component to handel login of user
const SignIn = () => {
  const navigate = useNavigate();
  const toast = useToast();

  //calling login api to login user on click of singIn
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    login(formProps)
      .then((res) => {
        //storing the auth token in locastorage to fetch it from anywhere
        localStorage.setItem("authorization", res.headers["x-auth-token"]);
        localStorage.setItem("userRoles", JSON.stringify(res.data.roles));
        localStorage.setItem("userId", res.data.id);
        localStorage.setItem("userEmail", res.data.email);
        //redirecting user to home page once login is successfull
        navigate("/home");
      })
      .catch((err) => {
        toast.showError("Please check user credentails");
      });
  };

  return (
    <>
      <LockIcon />
      <div style={{ marginBottom: "15px" }}>Sign in</div>

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
            name="username"
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
          <Button
            variant="contained"
            type="submit"
            style={{ width: "600px", backgroundColor: "#3f51b5" }}
          >
            SIGN IN
          </Button>
          <Link to="/signup">
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
