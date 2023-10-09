import React from 'react'
import{BiSolidUser} from 'react-icons/bi'
import {AiFillLock} from 'react-icons/ai'
import './Login.css'
const Login = () => {
    return (

    <div className="login-wrapper">
    <form className="login-form " action="" >
        <h1>Login</h1>
    <div className="input-box">
        <input type="text" placeholder="Username" required />
        <i><BiSolidUser  /></i>
    </div>
    
    <div className="input-box">
        <input type="password" placeholder="Password" required />
        <i><AiFillLock /></i>
    </div>

    <div className="remember-forget">
        <label><input type="checkbox" />Remember me </label>
        <a href="#">Forget password?</a>
    </div>
    
    <button type="submit" class="btn"> Login</button>
    
    <div className="register-link">
        <p>Don't have an account?<a href="#">Register</a></p></div>
        </form>
    </div>

  )
}

export default Login