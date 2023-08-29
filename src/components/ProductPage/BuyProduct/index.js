import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import AddAddress from "./AddAddress";
import { useProductDataContext } from "../ProductDataContext";
import { useToast } from "../../../common/useToast";
import { useNavigate } from "react-router-dom";
import { orderItem } from "../../../apis/apis";
import ProductDetail from "../ProductDetail";
import "./index.css";

const steps = ["Items", "Select Address", "Confirm Order"];

//function to override css
const stepperIconTheme = createTheme({
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "#3f51b5",
        },
      },
    },
  },
});

//component for stepper function and buy product form
const BuyProduct = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [completed, setCompleted] = useState({ 0: true });
  const { productData } = useProductDataContext();
  const [address, setAddress] = useState("");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const toast = useToast();
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  //function is called when user click on next button
  const handleNext = () => {
    if (address === "") {
      toast.showError("Please select address");
    } else {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
      handleComplete();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  };

  //when user clicks on place order button we call orderItem api to place order
  const handlePlaceOrder = () => {
    const payload = {
      user: userId,
      product: productData.id,
      quantity: productData.quantity,
      address: address.id,
    };
    orderItem(payload)
      .then(() => {
        toast.showSuccess("order placed successfully");
        navigate("/home");
      })
      .catch((err) => {
        toast.showError(
          "Some error occured while placing order please try again after some time"
        );
      });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <ThemeProvider theme={stepperIconTheme}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          sx={{ margin: "100px 100px 0px 100px" }}
        >
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </ThemeProvider>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {activeStep === 0 && <ProductDetail />}
              {activeStep === 1 && <AddAddress setAddress={setAddress} />}
              {activeStep === 2 && (
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "600px",
                      textAlign: "left",
                      marginLeft: "300px",
                      border: "0.5px solid black",
                    }}
                  >
                    <h1>{productData?.name}</h1>
                    <div className="margin">
                      Quantity: {productData?.quantity}
                    </div>
                    <div className="margin">
                      Category: <b>{productData?.category}</b>
                    </div>
                    <div style={{ fontStyle: "italic" }} className="margin">
                      {productData?.description}
                    </div>
                    <div
                      style={{
                        color: "red",
                        fontSize: "20px",
                        marginBottom: "100px",
                      }}
                    >
                      {" "}
                      ₹ {productData?.price}
                    </div>
                  </div>
                  <div
                    style={{
                      width: "600px",
                      textAlign: "left",
                      // marginLeft: "300px",
                      border: "0.5px solid black",
                    }}
                  >
                    <h1>Address Details</h1>
                    <div>{address?.street}</div>
                    <div>Contact Number: {address?.contactNumber}</div>
                    <div>
                      {address?.landmark},{address?.city} <br />
                      {address?.state}
                    </div>
                    <div
                      style={{
                        marginBottom: "100px",
                      }}
                    >
                      {address?.zipcode}
                    </div>
                  </div>
                </div>
              )}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, marginLeft: "800px" }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {!isLastStep() ? (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mr: 1, marginRight: "800px" }}
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handlePlaceOrder}
                  size="large"
                  style={{ width: "500" }}
                  sx={{ mr: 1, marginRight: "750px" }}
                >
                  Place order
                </Button>
              )}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};

export default BuyProduct;
