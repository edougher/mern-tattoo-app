import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createReview } from "../../../../../actions/appts";
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";

const artistReview = {
  apptId: "",
  cost: 0,
  time: 0,
  comments: "",
  approved: false,
};
const ArtistReview = () => {
  const [review, setReview] = useState(artistReview);
  const dispatch = useDispatch()
  const history = useHistory()
  const appt = useSelector((state) => state.reviewAppt);

  useEffect(() => {
    setReview({ ...review, apptId: appt._id });
  }, []);

  const handleSwitchChange = () => {
    setReview({ ...review, approved: !review.approved });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview(review, history))
    console.log(review);
  };
  return (
    <Container>
      <Paper>
        <Grid container spacing={2}>
          <Grid item sm="12">
            <Typography>location:{appt.location}</Typography>
          </Grid>
          <Grid item sm="12">
            <Typography>Width:{appt.width}</Typography>
          </Grid>
          <Grid item sm="12">
            <Typography>Height:{appt.height}</Typography>
          </Grid>
          <Grid item sm="12">
            <Typography>Comments:{appt.comments}</Typography>
          </Grid>
        </Grid>
        <Button>View Images</Button>
      </Paper>
      <Paper>
        <Typography variant="h3">Artist Review Form</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item sm="12">
            <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={review.approved}
                  onChange={handleSwitchChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label={review.approved ? "Approved" : "Not yet approved"}
            ></FormControlLabel>
          </FormGroup>
              <TextField
                name="cost"
                type="number"
                variant="outlined"
                autoFocus
                label="Cost"
                onChange={(e) => setReview({ ...review, cost: e.target.value })}
              />
            </Grid>
            <Grid item sm="12">
              <TextField
                name="time"
                variant="outlined"
                autoFocus
                label="Time"
                onChange={(e) => setReview({ ...review, time: e.target.value })}
              />
            </Grid>
            <Grid item>
              <TextField
                name="comments"
                label="Comments"
                autoFocus
                multiline
                fullWidth
                rows={4}
                variant="outlined"
                onChange={(e) =>
                  setReview({ ...review, comments: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ArtistReview;
