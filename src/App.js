import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProductDetail from "./components/ProductPage/ProductDetail";
import AddProduct from "./components/ProductPage/AddProduct";
import HomePage from "./components/ProductPage/ProductHome";
import BuyProduct from "./components/ProductPage/BuyProduct";
import ModifyProduct from "./components/ProductPage/ModifyProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//managin the basic routing of app
function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <TopNavBar />
        <Routes>
          <Route path="/login" Component={SignIn} />
          <Route exact path="/" element={<Navigate replace to="/login" />} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/add/product" Component={AddProduct} />
          <Route path="/home" Component={HomePage} />
          <Route path="/detail/:id" Component={ProductDetail} />
          <Route path="/order" Component={BuyProduct} />
          <Route path="/edit" Component={ModifyProduct} />
          <Route path="*"> Something went wrong please contact admin </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
