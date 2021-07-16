import React from "react";
import { Grow, Container, Grid } from "@material-ui/core";

import useStyles from "../../styles";
import Images from "../Images/Images";

const Home = () => {
  const classes = useStyles();
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
