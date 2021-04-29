import React from 'react';
import {Link} from 'react-router-dom';



const Post = ({post}) => {
    return (
        <div className="post">
            <Link to={`/posts/${post.id}`}>
                <h2>{ post.title }</h2>
                <p>{ post.body }</p>
                <p>{ post.price }</p>
            </Link>
            
        </div>
    )
}

export default Post
