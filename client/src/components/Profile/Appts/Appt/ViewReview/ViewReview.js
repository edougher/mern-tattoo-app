import React from "react";
import moment from "moment";
import Modal from "react-modal";
import { Card, CardMedia, Button, Typography } from "@material-ui/core";

const ViewReview = ({ currentReview, reviewOpen, openReview, handleClose }) => {
  const review = currentReview
  console.log("ln 8",typeof review);
  return (
    <Modal isOpen={reviewOpen} onClick={openReview}>
      
      
      {/* <Card>
        <Typography variant="h6">
          {moment(review.createdAt).fromNow()}
        </Typography>
        <Typography variant="h6">{review.cost}</Typography>
        <Typography variant="h6">{review.time}</Typography>
        <Typography variant="h6">{review.comments}</Typography>
      </Card> */}
      <button onClick={handleClose}>Close</button>
    </Modal>
  );
};

export default ViewReview;
