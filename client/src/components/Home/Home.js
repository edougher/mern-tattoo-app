import React, { useEffect, useState } from "react";
import { Grow, Container, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getUserAppts } from '../../actions/appts.js'
import useStyles from "../../styles";
import Images from "../Images/Images";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))
  dispatch(getUserAppts(user?.result?._id))
  // useEffect(() => {
  //   dispatch(getUserAppts(user?.result?._id))
  // }, [dispatch])
  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
              >
                  <Images />
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
