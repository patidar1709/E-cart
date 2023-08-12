import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar } from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { pink } from "@mui/material/colors";
import { Link } from "react-router-dom";
import "./index.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  backgroundColor: pink[500],
  "&:hover": {
    backgroundColor: pink[700],
  },
}));

const TopNavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <ShoppingCartIcon />
        <Typography className="padding">upGrad E-shop</Typography>
        <div className="centeredSearch">
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </div>
        <div className="rightAlign">
          <Link to="/login">
            <Button variant="text">
              <div className="button">Login</div>
            </Button>
          </Link>
          <Link to="/signUp">
            <Button variant="text">
              <div className="button">Sign Up</div>
            </Button>
          </Link>
          {/* <Button variant="text"><div className='button'>Home</div></Button>
        
        <Button variant="text"><div className='button'>Add Products</div></Button>
        <ColorButton variant="contained">Logout</ColorButton> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
