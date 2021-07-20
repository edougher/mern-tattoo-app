import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Appt from './Appt/Appt';
import useStyles from './styles';

const Appts = () => {
    const classes = useStyles()
    const appts = useSelector((state) => state.appts);
    
    return(
        !appts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {appts.map((appt) => (
                <Grid key={appt._id} item xs={12} sm={6} md={6}>
                  <Appt appt={appt}  />
                </Grid>
              ))}
            </Grid>
          )
        );
    
}

export default Appts;