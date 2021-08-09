import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentAppt } from "../../../../actions/appts";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Card, CardMedia, Button, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ImageModal from "../../../RequestForm/ImgModal/ImgModal";

import moment from "moment";
import useStyles from "./styles";

const Appt = ({ appt, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const isAdmin = useSelector((state) => state.auth.admin);

  const viewImages = (imgs) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const currentAppt = (appt) => {
    //console.log("helllo dispatch", appt);
    dispatch(setCurrentAppt(appt));
  };

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
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => viewImages(appt.imageFiles)}
      >
        View Images
      </Button>
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
