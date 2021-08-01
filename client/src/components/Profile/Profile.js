import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserAppts } from "../../actions/appts.js";

import { Grow, Container, Grid, Typography } from "@material-ui/core";
import useStyles from '../../styles'
import Appts from "./Appts/Appts.js";

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    // user?.result?.id ? 
    //   dispatch(getUserAppts(user?.result?.id)) :
    //   dispatch(getUserAppts(user?.result?.googleId)) 
      console.log(user);
  },[]);

  return (
    <Grow in>
    <Container>
      <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Typography variant="h3">My Appointments</Typography>
          <Appts />
        </Grid>
      </Grid>
    </Container>
  </Grow>
  );
};

export default Profile;
