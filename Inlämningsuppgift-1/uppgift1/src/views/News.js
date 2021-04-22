import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Post from '../komponenter/Post';
import { getPosts } from '../store/actions/postsActions';

const News = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    const posts = useSelector(state => state.postsReducer.posts);
    const loading = useSelector(state => state.postsReducer.loading);

    return (
        <div>
            {loading && !posts && <p>Laddar...</p>}
            {posts && posts.map(post => <Post key={posts.id} post={post}  />)}
        </div>
    )
}

export default News