import React from "react";
import { useDispatch } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";

// Store
import { removeProductAsync } from "../../dashboardSlice";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function DeleteProductDialogComponent(props) {
  const dispatch = useDispatch();
  const onRemoveProduct = () => dispatch(removeProductAsync(props.data));
    return (
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={"md"}
      >
        <DialogTitle id="alert-dialog-title">Remove Item</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ mt: 2, minWidth: 300 }}
          >
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>cancel</Button>
          <Button onClick={onRemoveProduct} autoFocus>
            remove
          </Button>
        </DialogActions>
      </Dialog>
    );
}

export default DeleteProductDialogComponent;