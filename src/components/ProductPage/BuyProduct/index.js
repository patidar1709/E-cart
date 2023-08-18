import React from "react";
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
  const [activeStep, setActiveStep] = React.useState(1);
  const [completed, setCompleted] = React.useState({ 0: true });
  const { productData } = useProductDataContext();
  const location = useLocation();
  console.log(":::::::::", productData);
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

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    handleComplete();
  };

  console.log("handleNext", isLastStep());

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
              {activeStep === 1 && <AddAddress />}
              {activeStep === 2 && (
                <div
                  style={{
                    width: "600px",
                    textAlign: "left",
                    marginLeft: "300px",
                  }}
                >
                  <h1>{productData?.name}</h1>
                  <div className="margin">
                    Available Quantity: {productData?.availableItems}
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
                  onClick={handleNext}
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
