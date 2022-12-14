import React from 'react';
import "./login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    
        <div className="login">
        <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter your email...' className='loginInput'/>
                <label htmlFor="">Password</label>
                <input type="Password" placeholder='Enter your password...' className='loginInput' />
               <button className="loginButton">Login</button>
               <button className="loginRegisterButton">
                <Link to="/register " className='link'>REGISTER</Link>
               </button>
            </form>
        </div>
    </>
  )
}

export default Login