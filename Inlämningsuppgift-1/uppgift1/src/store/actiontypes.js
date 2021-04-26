const actiontypes = () => {
    return {
        posts: {
            getPosts: 'GET_POSTS',
            loading: 'LOADING',
            setPosts: 'SET_POSTS',
            setPost: 'SET_POST'
        },
        auth: {
            login: 'LOGIN',
            logout: 'LOGOUT'
        }
    }
}

export default actiontypes;