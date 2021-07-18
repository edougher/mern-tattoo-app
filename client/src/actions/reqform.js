import * as api from '../api'

export const createRequest = (requestForm) => async (dispatch) => {
try {
    const { data } = await api.createRequest(requestForm)
    console.log(data);
    dispatch({type: "CREATE", payload: data})
} catch (error) {
    console.log(error);
    console.error(error);
}
}