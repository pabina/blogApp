import React from 'react';
import "./header.css"

const Header = () => {
  return (
    <>
        <div className="header">
   <div className="headerTitles">
    <span className="headerTitleSm">React & Node</span>
    <span className="headerTitleLg">Blog</span>
        </div>

       <img src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="headerImg" />
    </div>
    </>
  )
}

export default Header;