import React, { useState } from "react";
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

import { modifyProductAsync } from "../../dashboardSlice";

import { useSelector, useDispatch } from "react-redux";

export function EditDrawerComponent(props) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    image: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onEditProduct = () => dispatch(modifyProductAsync(product));

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
            Modify Product
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <TextField
            size="small"
            id="outlined-basic"
            // label="Image"
            defaultValue={props.image}
            onChange={handleChange}
            variant="outlined"
            type={'file'}
          >
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            size="small"
            id="outlined-basic"
            label="Title"
            defaultValue={props.title}
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
            defaultValue={props.description}
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
          <Button
            size="small"
            onClick={onEditProduct}
          >
            Modify
          </Button>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}
export default EditDrawerComponent;

