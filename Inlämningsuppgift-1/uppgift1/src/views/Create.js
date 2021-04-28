import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/actions/postsActions';
import { useHistory } from 'react-router-dom';


const Create = () => {

    const dispatch = useDispatch();
    const history = useHistory();

   const title = useRef();
   const body = useRef();

   const handleSub = e => {
       e.preventDefault();
       dispatch(addPost(title.current.value, body.current.value))
       history.push('/')
   }

    return (
        <form onSubmit={handleSub}>
            <h1>Skapa</h1>
            <div>
                <label htmlFor="titel">Titel: </label>
                <input type="text" id="title" ref={title} />
            </div>
            <div>
                <label htmlFor="body">Body: </label> <br/>
                <textarea id="body" cols="30" rows="10" ref={body} ></textarea>
            </div>
            <button>Lägg Till</button>
        </form>
        
    )
}

export default Create
