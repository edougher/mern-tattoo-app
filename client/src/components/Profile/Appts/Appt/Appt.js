import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentAppt } from "../../../../actions/appts";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  Card,
  CardMedia,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordianDetails,
  AccordionDetails,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import ImageModal from "../../../RequestForm/ImgModal/ImgModal";

import moment from "moment";
import useStyles from "./styles";

const Appt = ({ appt, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const isAdmin = useSelector((state) => state.auth.admin);
  const currentReview = useSelector((state) =>
    state.reviews.find((rev) => rev.apptId === appt._id)
  );

  const viewImages = (imgs) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const currentAppt = (appt) => {
    dispatch(setCurrentAppt(appt));
  };

  const openReview = () => {};
  // TODO: handle delete appt
  return (
    <Card className={classes.card}>
      <CardMedia />
      <div>
        <Typography variant="h6">{appt.name}</Typography>
        <Typography variant="body2">
          {moment(appt.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "blue" }}
          size="small"
          onClick={() => setCurrentId(appt._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {appt.location}
      </Typography>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {appt.width}
      </Typography>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {appt.height}
      </Typography>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {appt.colors}
      </Typography>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {appt.comments}
      </Typography>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {appt.status}
        {appt.status === "Approved" ? <CheckCircleIcon style={{ color: "green"}} /> : <HourglassEmptyIcon />}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => viewImages(appt.imageFiles)}
      >
        View Images
      </Button>
      {appt.status === "Approved" && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>View Artist Review</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Review at: {currentReview.createdAt}</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>Cost: {currentReview.cost}</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>Time: {currentReview.time}</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>Comments: {currentReview.comments}</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>Comments: {currentReview.comments}</Typography>
          </AccordionDetails>
        </Accordion>
        
      )}
      {isAdmin && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => currentAppt(appt)}
        >
          <Link to="/artistreview">Review</Link>
        </Button>
      )}
      <ImageModal
        open={open}
        handleClose={handleClose}
        imgs={appt.imageFiles}
      />
    </Card>
  );
};

export default Appt;
