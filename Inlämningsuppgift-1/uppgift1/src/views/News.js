import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Post from '../komponenter/Post';
import { getPosts } from '../store/actions/postsActions';

const News = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    })

    const posts = useSelector(state => state.postsReducer.posts)

    return (
        <div>
            {posts && posts.map(post => <Post key={posts.id} post={post}  />)}
        </div>
    )
}

export default News