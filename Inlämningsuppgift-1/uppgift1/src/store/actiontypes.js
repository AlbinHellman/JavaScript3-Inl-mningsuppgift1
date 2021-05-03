const actiontypes = () => {
    return {
        productCatalog: {
            set: 'SET_PRODUCT_CATALOG'
        },
        posts: {
            getPosts: 'GET_POSTS',
            loading: 'LOADING',
            setPosts: 'SET_POSTS',
            setPost: 'SET_POST'
        },

        cart: {
            add: 'ADD_TO_CART',
            remove: 'REMOVE_FROM_CART',
            delete: 'DELETE_PRODUCT'
        },
        auth: {
            login: 'LOGIN',
            logout: 'LOGOUT'
        }
    }
}

export default actiontypes;