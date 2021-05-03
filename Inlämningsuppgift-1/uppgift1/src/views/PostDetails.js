import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost, setPost } from '../store/actions/postsActions';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../src/store/actions/cartActions'

const PostDetails = ({product}) => {

  const id = useParams().id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnePost(id))

    return () => {
      // console.log('cleanup');
      dispatch(setPost(null))
    }

  }, [dispatch, id])

  const post = useSelector(state => state.postsReducer.post);
  const loading = useSelector(state => state.postsReducer.loading);

  const _post = ( post && 
    <div className="centrera">
      <h1>{ post.title }</h1>
      <h2>{ post.body }</h2>
      <p>{ post.price }</p>
      <div className="divknapp">
      <button onClick={() => {
        dispatch(addToCart(product))
      }}>Lägg till i kundvagnen</button>
      </div>
    </div>)

  return (
    <div>
      { _post }
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default PostDetails
