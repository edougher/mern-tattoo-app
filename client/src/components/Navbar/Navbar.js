import React, {useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode'

import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import useStyles from './styles';
import * as actionType from '../../constants/actionTypes';
import darkRose from '../../images/dark_rose.png'


const Navbar = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const classes = useStyles()

    const logout = () => {
        dispatch({ type: actionType.LOGOUT })
        
        history.push('/auth')

        setUser(null)
    }
    return (
        
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Dark Rose</Typography>
                <img className={classes.image} src={darkRose} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user?.result.firstname} src={user?.result.imageUrl}>{user?.result.firstname.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user?.result.firstname}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                        <Button variant="contained" color="secondary" component={Link} to="/reqform">Request</Button>
                </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar> 
        </AppBar>
    );
}

export default Navbar;