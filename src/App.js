// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProductCard from "./components/ProductPage/ProductCard";
import AddProduct from "./components/ProductPage/AddProduct";
import HomePage from "./components/ProductPage/ProductHome";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavBar />
        {/* <ProductCard /> */}
        <Routes>
          <Route path="/login" Component={SignIn} />
          <Route path="/signUp" Component={SignUp} />
          <Route path="/add/product" Component={AddProduct} />
          <Route path="/home" Component={HomePage} />
          <Route path="*"> Something went wrong please contact admin </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
