import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { deleteAppt } from "../../../../actions/appts";

import moment from "moment";
import useStyles from "./styles";

const Appt = ({ appt, setCurrentId }) => {
  const classes = useStyles();
  //const dispatch = useDispatch();
  

  return (
    <Card className={classes.card}>
      <CardMedia />
      <div >
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
          <Typography className={classes.title} variant="h5" gutterBottom>{appt.location}</Typography>
          <Typography className={classes.title} variant="h5" gutterBottom>{appt.width}</Typography>
          <Typography className={classes.title} variant="h5" gutterBottom>{appt.height}</Typography>
          <Typography className={classes.title} variant="h5" gutterBottom>{appt.colors}</Typography>
          <Typography className={classes.title} variant="h5" gutterBottom>{appt.comments}</Typography>
          <Typography className={classes.title} variant="h5" gutterBottom>{appt.status}</Typography>
    </Card>
  )
};

export default Appt;
