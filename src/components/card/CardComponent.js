import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class CardComponent extends Component {
  render() {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={this.props.data.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.props.data.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={this.props.onRemove}>
              Remove
            </Button>
            <Button size="small" onClick={this.props.onEdit}>
              Modify
            </Button>
          </CardActions>
        </Card>
    );
  }
}
export default CardComponent;
