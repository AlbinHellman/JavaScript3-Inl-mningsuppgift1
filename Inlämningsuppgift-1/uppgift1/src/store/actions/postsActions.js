import actiontypes from '../actiontypes';
import axios from 'axios';

export const getPosts = () => {
    return async dispatch => {
        dispatch(loading(true));


        const res = await axios.get('http://localhost:8080/posts');


        setTimeout(() => {
        dispatch(setPosts(res.data));
        dispatch(loading(false));
        }, 1000)
    }
}

export const loading = (payload) => {
    return {
        type: actiontypes().posts.loading,
        payload
    }
}

export const setPosts = posts => {
    return {
        type: actiontypes().posts.setPosts,
        payload: posts
    }
}