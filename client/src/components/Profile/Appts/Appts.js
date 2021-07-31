import React, { useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Appt from "./Appt/Appt";
import useStyles from "./styles";
import { getUserAppts } from "../../../actions/appts.js";
const Appts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const appts = useSelector((state) => state.appts);

  useEffect(() => {
    dispatch(getUserAppts(user?.result?.id || user?.result?.googleId));
  }, []);

  return !appts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {appts.map((appt) => (
        <Grid key={appt._id} item xs={12} sm={6} md={6}>
          <Appt appt={appt} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Appts;
