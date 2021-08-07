import { LOGOUT, AUTH, ADMIN } from '../constants/actionTypes'

const authReducer = (authData = null, action) => {
    
    switch (action.type) {
        case ADMIN:
            //TODO dont set admin if no one is signed in
            const user = JSON.parse(localStorage.getItem('profile'))
            return {...authData, ...user?.result, admin: user?.result.email === "admin@d.com"  }
        case AUTH:
        localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...authData, ...action?.data?.result, admin: action?.data?.result.email === "admin@d.com"}
        case LOGOUT:
            localStorage.clear()
            return {...authData, ...null}
        default:
            return authData
    }
}

export default authReducer;