import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { deleteProduct } from "../../../apis/apis";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../common/useToast";
import { getProductList } from "../../../actions/product";
import { useDispatch } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteProduct({ open, setOpen, id }) {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCancel = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteProduct(id)
      .then(() => {
        navigate("/home");
        dispatch(getProductList());
        toast.showSuccess("product deleted successfully");
        setOpen(false);
      })
      .catch(() => {
        toast.showError("Some error occured while deleting product");
        setOpen(false);
      });
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCancel}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Confirm Deletion Of Product"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete the product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleDelete}>
            Ok
          </Button>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
