import React from 'react';
import { Grid } from '@material-ui/core';



import Image from './Image/Image.js'
import useStyles from './styles';

const getImages = () => {
    let images = []
    for(let x = 1; x <= 12; x++){
      //Importing/Using Images in React
      //https://www.youtube.com/watch?v=taMJct5oeoI
      let imagePath = `../../../images/casey_insta_images/${x}.jpeg`
      images.push(imagePath)
}
   return images.map(image => (
    <Grid item xs={12} sm={6} md={6}>
           <Image image={image} />
    </Grid>
    )) 
}

const Images = (props) => {

    return (
        <Grid  container alignItems="stretch" spacing={3}>
            {getImages()}
        </Grid>
    );
}

export default Images;