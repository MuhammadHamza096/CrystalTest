import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { truncateText } from "../../utils/common";
import Tooltip from "@mui/material/Tooltip";
import "./card.scss";
import { CardActions } from "@mui/material";
import CustomButton from "../Button";

const MediaCard = ({
  image,
  title,
  description,
  buttonClickHandler,
  showButton = false,
  buttonText = "",
}) => {
  const truncatedDescription = truncateText(description || "", 80);
  const truncatedTitle = truncateText(title || "", 15);
  return (
    <Card>
      <CardMedia image={image} className="card-media" />
      <CardContent className="card-content">
        <Tooltip title={title} arrow>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: "1.2rem" }}
          >
            {truncatedTitle}
          </Typography>
        </Tooltip>

        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            className="description"
          >
            {truncatedDescription}
          </Typography>
        )}
      </CardContent>
      {showButton && (
        <CardActions>
          <CustomButton
            variant="outlined"
            text={buttonText}
            onClick={buttonClickHandler}
          />
        </CardActions>
      )}
    </Card>
  );
};
export default MediaCard;
