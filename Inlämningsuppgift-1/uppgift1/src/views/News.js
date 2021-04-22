import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/actions/postsActions';

const News = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    })

    return (
        <div>
            news
        </div>
    )
}

export default News