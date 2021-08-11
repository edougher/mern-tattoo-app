import * as api from "../api";

export const getUserAppts = (userId) => async (dispatch) => {
  try {
    const { data } = await api.fetchAppts(userId);
    dispatch({ type: "FETCH_USER_APPTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteAppt = (userId) => async (dispatch) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const setCurrentAppt = (appt) => {
  return {
    type: "SET_CURRENT_APPT",
    payload: appt,
  };
};

export const createReview = (review) => async (dispatch) => {
  try {
    const { data } = await api.createReview(review);
    console.log(data);
    dispatch({ type: "CREATE_REVIEW", payload: data });
  } catch (error) {
    console.log(error);
  }
};
