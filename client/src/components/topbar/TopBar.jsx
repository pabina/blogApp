import React from 'react';
import "./topbar.css";
import { Link } from 'react-router-dom';
// import Home from '../../pages/home/Home';

const TopBar = () => {
  const user=false;
  return (
    <>
    <div className='top'>
        <div className='topleft'>
        <i className=" topIcon fa-brands fa-facebook-f"></i>
        <i className=" topIcon fa-brands fa-square-twitter"></i>
        <i className=" topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className='topcenter'>
       <ul className="toplist">
         <li className="toplistItem"><Link className='link' to="/">HOME</Link></li>
         <li className="toplistItem"><Link className='link' to="/">ABOUT</Link></li>
         <li className="toplistItem"><Link className='link' to="/contact">CONTACT</Link></li>
         <li className="toplistItem"><Link className='link' to="/write">WRITE</Link></li>
         <li className="toplistItem">
          {user  && "LOGOUT"}
          {/* <Link className='link' to="/">LOGOUT</Link></li> */}
           </li>
        {/* <li className="toplistItem">ABOUT</li>
        <li className="toplistItem">CONTACT</li>
        <li className="toplistItem">WRITE</li>
        <li className="toplistItem">LOGOUT</li> */}
       </ul>
        </div>
        <div className='topright'>
          {
            user ?(
            <img className='topImg' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            ):(
              <ul className='toplist'>
                <li className='toplistItem'>
              <Link className='link' to ="/login">LOGIN</Link> 
                </li>
                <li className='toplistItem'>
              <Link className='link' to ="/register">REGISTER</Link> 
                </li>
              </ul>

            )
          }
            <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>

        </div>
        
    </div>
    </>
  ) 
}

export default TopBar