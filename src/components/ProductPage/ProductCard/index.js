import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.css";

const ProductCard = ({
  id,
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
      <Card sx={{ maxWidth: 345, maxHeight: "500px" }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={imageUrl} />
          <CardContent>
            <div className="cardContent">
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
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className="button-container">
            <Link to={`/detail/${id}`}>
              <Button
                sx={{ color: "white", background: "#3f51b5" }}
                size="small"
                variant="contained"
              >
                BUY
              </Button>
            </Link>
            <div className="edit-delete-buttons">
              <Button size="small">
                <EditIcon sx={{ color: "grey" }} />
              </Button>
              <Button size="small">
                <DeleteIcon sx={{ color: "grey" }} />
              </Button>
            </div>
          </div>
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
