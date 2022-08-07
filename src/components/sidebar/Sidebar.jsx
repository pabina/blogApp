import React from 'react';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
       <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='sidebarimg' />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          corporis cupiditate consectetur vel, eligendi minus modi sequi nesciunt laborum dolorem accusantium necessitatibus expedita maxime.</p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <ul className="sidebarSocial">
        <i className=" sidebarIcon fa-brands fa-facebook-f"></i>
        <i className=" sidebarIcon fa-brands fa-square-twitter"></i>
        <i className=" sidebarIcon fa-brands fa-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
            </ul> 
        </div>
    </div>
    </>
  )
}

export default Sidebar