import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import './login.css'
const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

function Login() {
  const [user, setUser] = useState(initialState)//Lazy initial state
  
  const {email, password, err, success} = user
  
  const handleChangeInput = e => {
    const {name, value} = e.target 
   
    setUser({...user, [name]:value, err: '', success: ''})
} // handler the input


const handleSubmit = async e => {
  e.preventDefault()
  try { 
      const res = await axios.post('http://localhost:5000/users/login', {email, password})
     
      setUser({...user, err: '', success: res.data.msg})
      localStorage.setItem('firstLogin', true)
    
  } catch (err) {
      err.response.data.msg && 
      setUser({...user, err: err.response.data.msg, success: ''})
  }
} //handle the submition



    return (
      <div className="login_page">
      
      <form onSubmit={handleSubmit}>
          
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                    value={email} name="email"  onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput}  />
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