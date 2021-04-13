import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import './login.css'
import { signin } from '../../redux/action/authAction';
import {useDispatch} from 'react-redux'
const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

function Login() {
  const [user, setUser] = useState(initialState)  //initial state
  const dispatch = useDispatch()
  const history = useHistory()
  const { email, password, err, success } = user

  const handleChangeInput = e => {
    const { name, value } = e.target

    setUser({ ...user, [name]: value, err: '', success: '' })
  } // handle the input


  const handleSubmit = async e => {
    e.preventDefault()
    

   
    dispatch(signin(user, history));    
      

  
  } //handle the submition

  return (
    <div className="login_page">

      <div className="main-area">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="text-field">
              <label htmlFor="email">Email Address</label>
              <input type="text" placeholder="Enter email address" id="email"
                value={email} name="email" onChange={handleChangeInput} />
            </div>

            <div className="text-field">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Enter password" id="password"
                value={password} name="password" onChange={handleChangeInput} />
            </div>

            <div className="row">
              <button type="submit">Login</button>
              <Link to="/forgot_password">Forgot your password?</Link>
            </div>
          </form>


        </div>
      </div>


    </div>
  )
}

export default Login