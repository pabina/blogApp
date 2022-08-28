import React from 'react';
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar"

const Settings = () => {
  return (
    <>
<div className="settings">
    <div className="settingsWrapper">
        <div className="settingTitle">
            <span className="settingsUpdateTitle">Update your Account</span>
            <span className="settingsDeleteTitle">Delete your Account</span>
        </div>
        <form action="" className="settingsForm">
            <label >Profile Picture</label>
            <div className="settingsPP">
                <img src="https://images.unsplash.com/photo-1659190510502-c18d7342a085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
          
          
           <label htmlFor='fileInput'>
            <i className="settingsPPIcon fa-solid fa-user"></i></label> 
            <input type="file" id='fileInput' style={{display:"none"}}/>
       </div>
       <label >Username</label>
       <input type="text" placeholder='pabina'/>
       <label >Email</label>
       <input type="email" placeholder='pabina@gmail.com'/>
       <label >Password</label>
       <input type="password" />
       <button className="settingsSubmit">Update</button>
        </form>
    </div>
        <Sidebar/>
    
</div>
    </>
  )
}

export default Settings