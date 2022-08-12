import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Navbar
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// Components
import CardComponent from "../../components/card/CardComponent.js";
import DeleteProductDialogComponent from "./components/dialog/DeleteProductDialogComponent.js";
import EditDrawerComponent from "./components/edit-drawer/EditDrawerComponent.js";
import AddDrawerComponent from "./components/add-drawer/AddDrawerComponent.js";

// API
import { ProductService } from "../../services/product/product-service";

// Store
import { removeUserAsync } from "../../app/userSlice";
import {
  getProductsAsync,
} from "./dashboardSlice";

// Router
import { useNavigate, Link } from "react-router-dom";

export function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, user } = useSelector((state) => state.userSlice);
  const { productStatus, products } = useSelector(
    (state) => state.dashboardSlice
  );

  const [openDialog, setOpenDeleteDialog] = useState(false);
  const [addState, setAddState] = useState({
    right: false,
  });

  const [editState, setEditState] = useState({
    right: false,
  });

  const [product, setProduct] = useState({});

  const anchor = "right";

  // Drawer
  const toggleAddDrawer = (anchor, openDrawer) => (event) => {
    setAddState({ ...addState, [anchor]: openDrawer });
  };

  // Drawer
  const callbackToggleAddDrawer = useCallback(() => {
    setAddState({ [anchor]: false });
  }, []);

  // Drawer
  const toggleEditDrawer = (anchor, openDrawer) => (event) => {
    setEditState({ ...addState, [anchor]: openDrawer });
  };

  // Edit Drawer Product
  const toggleEditProductDrawer = (product) => (event) => {
    setProduct(product)
    setEditState({ ...editState, [anchor]: true });
  };

  // Drawer
  const callbackToggleEditDrawer = useCallback(() => {
    setEditState({ [anchor]: false });
  }, []);

  const onRemoveUser = () => dispatch(removeUserAsync(user));

  // Delete Dialog
  const handleOpenDeleteProduct = (product) => (e) => {
    setProduct(product)
    setOpenDeleteDialog(true);
  };

  // Delete Dialog
  const handleCloseDeleteProduct = () => {
    setOpenDeleteDialog(false);
  };

  // For User
  useEffect(() => {
    if (status === "unauthorized") {
      navigate("/login");
    }
  }, [navigate, status]);

  // For Product
  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(getProductsAsync());
    }
    if (productStatus === "added") {
      callbackToggleAddDrawer(anchor, false);
      dispatch(getProductsAsync());
    }
    if (productStatus === "modified") {
      callbackToggleEditDrawer(anchor, false);
      dispatch(getProductsAsync());
    }
    if (productStatus === "removed") {
      handleCloseDeleteProduct();
      dispatch(getProductsAsync());
    }
  }, [
    dispatch,
    productStatus,
    callbackToggleAddDrawer,
    callbackToggleEditDrawer,
    anchor,
  ]);

  const navbar = (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Products
        </Typography>
        <Button color="inherit" onClick={onRemoveUser}>
          Delete Account
        </Button>
      </Toolbar>
    </AppBar>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          {navbar}
        </Grid>
        <Grid item xs={12} textAlign={"end"} padding={2}>
          <Button
            variant="contained"
            size="small"
            onClick={toggleAddDrawer(anchor, true)}
          >
            Add Product
          </Button>
        </Grid>
        <Grid container paddingX={4}>
          {products.map((element) => (
            <Grid
              key={element.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              marginTop={2}
            >
              <CardComponent
                data={element}
                onRemove={handleOpenDeleteProduct(element)}
                onEdit={toggleEditProductDrawer(element)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Remove Dialog */}
        <DeleteProductDialogComponent
          open={openDialog}
          handleClose={handleCloseDeleteProduct}
          data={product}
        />

        {/* Add Drawer */}
        <AddDrawerComponent
          anchor={anchor}
          state={addState}
          toggleDrawer={toggleAddDrawer}
        />

        {/* Edit Drawer */}
        <EditDrawerComponent
          anchor={anchor}
          state={editState}
          toggleDrawer={toggleEditDrawer}
          data={product}
        />
      </Grid>
    </Box>
  );
}
