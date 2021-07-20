import React, { useEffect, useState } from "react";
import { Grow, Container, Grid, Typography } from "@material-ui/core";

import useStyles from '../../styles'
import Appts from "./Appts/Appts.js";

const Profile = () => {
  const classes = useStyles();
  // const user = JSON.parse(localStorage.getItem('profile'))

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
