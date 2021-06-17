import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import useStyles from './styles';


const Navbar = (props) => {
    const classes = useStyles()
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Dark Rose</Typography>
            </div>
        </AppBar>
    );
}

export default Navbar;