import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Singlecard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "10px 0px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.val.url}
          alt="eco friendly products"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.val.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.val.dis}{" "}
            <u>
              <b>Read more ...</b>
            </u>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ margin: "5px 0px" }}
          >
            Number of remains : {props.val.remain}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ margin: "5px 0px" }}
          >
            Price : Rs. {props.val.price} .00
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" disableElevation>
              <ShoppingCartIcon style={{ paddingRight: "6px" }} />
              Add to Cart
            </Button>
            <Button variant="contained" disableElevation color="error">
              View Details
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
