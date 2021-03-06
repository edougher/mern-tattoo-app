import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})

//const url = 'http://localhost:5000/posts';


//export const fetchPosts = () => API.get('/posts')
//export const createPost = (newPost) => API.post('/posts', newPost)
//export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
//export const deletePost = (id) => API.delete(`/posts/${id}`)
//export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const fetchAppts = (userId) => API.get(`/appts/${userId}`)
export const createRequest = (newAppt) => API.post('/appts', newAppt)
export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)
export const createReview = (newReview) => API.post('/review', newReview)
export const getAllReviewForUser = (userId) => API.get(`/review/${userId}`) 