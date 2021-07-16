import React from 'react';
import { Card, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const Image = ({ image }) => {
    const classes = useStyles()
    return (
        <Card>
            <CardMedia className={classes.media} src={image} />
        </Card>
    );
}

export default Image;