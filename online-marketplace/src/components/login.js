import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import './login.css'
const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

function Login() {
  const [user, setUser] = useState(initialState)


  const { email, password, err, success } = user

  return (
    <div className="login_page">

      <form >

        <div>
          <label htmlFor="email">Email Address</label>
          <input type="text" placeholder="Enter email address" id="email"
            value={email} name="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter password" id="password"
            value={password} name="password" />
        </div>

        <div className="row">
          <button type="submit">Login</button>
          <Link to="/forgot_password">Forgot your password?</Link>
        </div>
      </form>
    </div>
  )


}


export default Login