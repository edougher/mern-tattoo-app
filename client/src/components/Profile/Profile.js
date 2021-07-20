import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAppts } from '../../actions/appts.js'

const Profile = () => {
    const myAppts = useSelector((state) => (console.log(state)))
    const dispatch = useDispatch()
    


    return (
        <h1>Profile</h1>,
        <h1>{ myAppts}</h1>
        
    )
}

export default Profile;