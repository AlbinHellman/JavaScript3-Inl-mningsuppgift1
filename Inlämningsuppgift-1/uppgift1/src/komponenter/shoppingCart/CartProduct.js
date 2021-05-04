import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteProduct, removeFromCart } from '../../store/actions/cartActions' 
import {Link} from 'react-router-dom';
import actiontypes from '/JavaScript3-Inlämningsuppgift-1/Inlämningsuppgift-1/uppgift1/src/store/actiontypes'



const CartProduct = ({product}) => {

const post = useSelector(state => state.postsReducer.post);
  const dispatch = useDispatch();

  const add = e => {
    e.stopPropagation();
    dispatch(addToCart(product))
  }

  const remove = e => {
    e.stopPropagation();
    dispatch(removeFromCart(product._id))
  }

  return (
    <div>
      <div className="p-2 d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center">
          
          <div>
            <div className="productnamn"><strong>{ post.title }</strong></div>
            <div><small>{ product.quantity } x { post.price }</small></div>
          </div>
        </div>

        <div>
          <button type="button" className="btn btn-sm px-3" onClick={remove}>-</button>
          <button type="button" className="btn btn-sm px-3" onClick={add}>+</button>
          <button type="button" className="btn btn-sm btn-danger px-3" onClick={deleteProduct}><i className="fas fa-trash"></i></button>
        </div>

      </div>
      
    </div>
  )
}

export default CartProduct