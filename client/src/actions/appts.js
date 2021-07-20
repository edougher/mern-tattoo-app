import * as api from '../api'

export const getUserAppts = (userId) => async (dispatch) => {
    try {
        const { data } = await api.fetchAppts(userId);
        dispatch({ type: "FETCH_USER_APPTS", payload: data })
        
    } catch (error) {
        console.log(error);
    }
}
export const deleteAppt = (userId) => async (dispatch) => {
    try {
       
        
    } catch (error) {
        console.log(error);
    }
}

