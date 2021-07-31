import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./styles";
import * as actionType from "../../constants/actionTypes";
import darkRose from "../../images/dark_rose.png";

const Navbar = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Dark Rose
        </Typography>
        <img className={classes.image} src={darkRose} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.firstname}
              src={user?.result.imageUrl}
            >
              {user?.result?.familyName}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.firstname}
            </Typography>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              color="primary"
              variant="contained"
              onClick={handleClick}
            >
              Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              variant="contained"
              color="secondary"
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="/profile"
                >
                  Profile
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="/reqform"
                >
                  Request
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  variant="contained"
                  className={classes.logout}
                  color="secondary"
                  onClick={logout}
                >
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
