import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/authenticate';

const Login = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
      dispatch(login())
  }


    return (
        <div className="loggain">
            <h1>LOGGA IN</h1>
            <button onClick={handleClick}>Logga In</button>
            
        </div>
    )
}

export default Login
