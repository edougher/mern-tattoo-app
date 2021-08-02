import React from 'react';
import { Card, CardMedia, Grid } from '@material-ui/core';


import useStyles from './styles';

const Image = ({ img }) => {
    const classes = useStyles()
    return (
        <Card>
            <CardMedia className={classes.media} image={img} />
        </Card>
        
    );
}

export default Image;