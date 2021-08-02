import React, { useState } from "react";
import FileBase from "react-file-base64";
import { createRequest } from "../../actions/reqform";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import ImageModal from "./ImgModal/ImgModal";
import {
  TextField,
  Grid,
  Paper,
  Button,
  Typography,
  Container,
} from "@material-ui/core";

let reqFormData = {
  userId: "",
  location: "forearm",
  width: 0,
  height: 0,
  colors: 0,
  comments: "hello world",
  imageFiles: [],
};

const RequestForm = (props) => {
  const [reqData, setReqData] = useState(reqFormData);
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setReqData({...reqData, userId: user.result._id})
    dispatch(createRequest({ ...reqData, userId: user?.result?._id}, history));
    //console.log(reqData);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container component="main" maxwidth="md">
      <Paper>
        <Typography variant="h2">Request Appointment</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item sm="12">
              <TextField
                name="location"
                onChange={(e) =>
                  setReqData({ ...reqData, location: e.target.value })
                }
                variant="outlined"
                required
                fullWidth
                label="Location"
                autoFocus
                type="text"
              />
            </Grid>
            <Grid item sm="12">
              <Typography variant="h6">Approximate Size</Typography>
              <TextField
                name="width"
                onChange={(e) =>
                  setReqData({ ...reqData, width: e.target.value })
                }
                variant="outlined"
                required
                label="Width"
                autoFocus
                type="number"
              />
              <TextField
                name="height"
                onChange={(e) =>
                  setReqData({ ...reqData, height: e.target.value })
                }
                variant="outlined"
                required
                label="Height"
                autoFocus
                type="number"
              />
            </Grid>
            <Grid item sm="12">
              <Typography variant="h6">Number of Colors</Typography>
              <TextField
                name="colors"
                onChange={(e) =>
                  setReqData({ ...reqData, colors: e.target.value })
                }
                variant="outlined"
                required
                fullWidth
                label="Colors"
                autoFocus
                type="number"
                defaultValue="0"
              />
            </Grid>
            <Grid item sm="12">
              <Typography variant="h6">Comments</Typography>
              <TextField
                name="comments"
                onChange={(e) =>
                  setReqData({ ...reqData, comments: e.target.value })
                }
                variant="outlined"
                fullWidth
                multiline
                maxRows={5}
                label="Comments"
              />
            </Grid>
            <Grid item sm="12">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setReqData({
                    ...reqData,
                    imageFiles: [...reqData.imageFiles, base64],
                  })
                }
              />
              {!reqData.imageFiles.length ?
                <button type="button" >
                  No Images uploaded
                </button> :
                <button type="button" onClick={handleOpen}>
                  {reqData.imageFiles.length === 1 ?
                    "View Image" :
                    `View ${reqData.imageFiles.length} Images`}
                </button>
              }

              {/* {reqData.imageFiles.map((img) => {
        return <h8>{img}</h8>
      })} */}
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button>Clear</Button>
        </form>
      </Paper>

      {/* ---------- Image Modal Needs Work ------------- */}
      {/* <ImageModal
        open={open}
        handleClose={handleClose}
        imgs={reqData.imageFiles}
      /> */}
    </Container>
  );
};

export default RequestForm;

