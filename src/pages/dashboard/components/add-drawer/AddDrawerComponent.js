import React, { useState, useEffect } from "react";
// Drawer
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

// List
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

// Text Field
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { addProductAsync } from "../../dashboardSlice";

import { useSelector, useDispatch } from "react-redux";

export function AddDrawerComponent(props) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    image: "",
    title: "",
    description: "",
  });

  const handleChange = async (e) => {
    let { name, value } = e.target;
    if (name === "image") {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        value = reader.result;
        setProduct((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    } else {
      setProduct((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onAddProduct = () => dispatch(addProductAsync(product));

  return (
    <SwipeableDrawer
      anchor={props.anchor}
      open={props.state[props.anchor]}
      onClose={props.toggleDrawer(props.anchor, false)}
      onOpen={props.toggleDrawer(props.anchor, true)}
    >
      <List>
        <ListItem>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Add Product
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <TextField
            size="small"
            id="outlined-basic"
            // label="Image"
            onChange={handleChange}
            variant="outlined"
            name="image"
            type={"file"}
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            size="small"
            id="outlined-basic"
            label="Title"
            name="title"
            onChange={handleChange}
            variant="outlined"
            fullWidth={true}
          />
        </ListItem>
        <ListItem>
          <TextField
            size="small"
            id="outlined-basic2"
            label="Description"
            name="description"
            onChange={handleChange}
            variant="outlined"
            fullWidth={true}
          />
        </ListItem>
        <ListItem>
          <Button
            size="small"
            color="error"
            onClick={props.toggleDrawer(props.anchor, false)}
          >
            Cancel
          </Button>
          <Button size="small" onClick={onAddProduct}>
            Add
          </Button>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}
export default AddDrawerComponent;
