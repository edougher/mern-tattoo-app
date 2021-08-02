import React from "react";
import { Grid } from "@material-ui/core";
//import * as imgs from '../../images/casey_insta_images'

import Image from "./Image/Image.js";
import useStyles from "./styles";

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context(
    "../../images/casey_insta_images",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const Images = (props) => {
  return (
    <Grid container alignItems="stretch" spacing={3}>
      {Object.keys(images).map((key) => {
        return <Grid item xs={12} sm={6} md={6}>
            <Image img={images[key].default} />
          </Grid>;
     })}
    </Grid>
  );
};

export default Images;
