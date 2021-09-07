import * as api from "../api";

export const getReviews = (id) => async (dispatch) => {
try {
    const { data } = await api.getAllReviewForUser(id)
    dispatch({type: "FETCH_USER_REVIEWS", reviews: data})
} catch (error) {
    console.log(error);
}
}