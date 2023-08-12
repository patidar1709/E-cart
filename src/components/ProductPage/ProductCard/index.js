import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PropTypes from "prop-types";
import "./index.css";

const ProductCard = ({
  imageUrl,
  name,
  price,
  description,
  category,
  manufacturer,
  availableItems,
}) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={imageUrl} />
          <CardContent>
            <div className="div">
              <Typography gutterBottom variant="h6" component="div">
                {name}
              </Typography>
              <div className="rightAlign">
                <Typography gutterBottom variant="h6" component="div">
                  ₹ {price}
                </Typography>
              </div>
            </div>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            BUY
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

ProductCard.propTypes = {
  image: PropTypes.any,
  title: PropTypes.any,
  price: PropTypes.any,
  description: PropTypes.any,
};

export default ProductCard;
