import React, { useState } from "react";
import FileBase from "react-file-base64";
import { createRequest } from "../../actions/reqform";
import { useDispatch } from "react-redux";
import {
  TextField,
  Grid,
  Paper,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
const user = JSON.parse(localStorage.getItem('profile'))
let reqFormData = {
  userId: "",
  location: "forearm",
  width: 0,
  height: 0,
  colors: 0,
  comments: "hello world",
  selectedFile: "",
};

const RequestForm = (props) => {
  const [reqData, setReqData] = useState(reqFormData);
  const user = JSON.parse(localStorage.getItem('profile'))
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //setReqData({...reqData, userId: user.result._id})
    dispatch(createRequest({ ...reqData, userId: user?.result?._id}));
    console.log(reqData);
  };
  const setImgFiles = (img) => {
    console.log(img.base64);
    // setReqData({ ...reqData, selectedFile: [...reqData.selectedFile, img.base64] })
    // console.log(reqData);
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
                multiple={true}

              />
              <button>Add Image</button>
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
    </Container>
  );
};

export default RequestForm;
// for ln 117 => onDone={({ base64 }) => setImgFiles(base64)}
// selectedFile: [...reqData.selectedFile, base64]  => for line 115
