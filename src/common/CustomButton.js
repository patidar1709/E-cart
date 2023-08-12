import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const CustomButton = ({
  buttonText,
  backgroundColor,
  textColor,
  onClick,
  variant,
  style,
}) => {
  return (
    <div>
      <Button style={style} variant={variant} onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomButton;
