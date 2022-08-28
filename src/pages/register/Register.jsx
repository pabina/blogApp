import React from 'react';
import "./register.css";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
    
        <div className="register">
        <span className="registerTitle">Register</span>
            <form action="" className="registerForm">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter your username...' className='registerInput'/>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter your email...' className='registerInput'/>
                <label htmlFor="">Password</label>
                <input type="Password" placeholder='Enter your password...' className='registerInput' />
               <button className="registerButton">Register</button>
               <button className="registerLoginButton">
                <Link to="/login" className='link'>LOGIN</Link>
                
               </button>
            </form>
        </div>
    </>
  )
}

export default Register