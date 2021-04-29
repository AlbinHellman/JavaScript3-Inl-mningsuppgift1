import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/actions/postsActions';
import { useHistory } from 'react-router-dom';


const Create = () => {

    const dispatch = useDispatch();
    const history = useHistory();

   const title = useRef();
   const body = useRef();
   const price = useRef();

   const handleSub = e => {
       e.preventDefault();
       dispatch(addPost(title.current.value, body.current.value, price.current.value))
       history.push('/')
   }

    return (
        <form onSubmit={handleSub}>
            <div className="diven">
            <h1 className="skapah1">Skapa</h1>
            <div className="divcreate">
                <div className="class">
                <label htmlFor="title"><div className="titel4">Titel: </div></label>
                </div>
                <input type="text" id="title" ref={title} />
                <div className="priset">
                <label htmlFor="price"><div className="titel5">Pris: </div></label> <br/>
                <textarea id="price" cols="19" rows="1" ref={price} ></textarea>
                </div>
            </div>
            <div className="skapabody">
                <label htmlFor="body"><div className="titel5">Body: </div></label> <br/>
                <textarea id="body" cols="30" rows="10" ref={body} ></textarea>
               
            </div>
        
            
            <div className="knapp1">
            <button className="längd">Lägg Till</button>
            </div>
            </div>
        </form>
        
    )
}

export default Create
