  
import actiontypes from '../actiontypes';

export const addToCart = product => {
  return {
    type: actiontypes().cart.add,
    payload: product
  }
}

export const removeFromCart = id => {
  return {
    type: actiontypes().cart.remove,
    payload: id
  }
}

export const deleteProduct = id => {
  return {
    type: actiontypes().cart.delete,
    payload: id
  }
}