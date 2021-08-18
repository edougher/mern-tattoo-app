import * as api from "../api";

export const getReviews = (id) => async (dispatch) => {
try {
    const { data } = await api.getAllReviewForUser(id)
    console.log(data);
} catch (error) {
    console.log(error);
}
}