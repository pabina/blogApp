import React from 'react';
import "./write.css"

const Write = () => {
  return (
    <div>
        <div className="write">
            <img src="https://images.unsplash.com/photo-1659440508882-9202c080e573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80"
            className='writeImg' alt="" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus="true" />
                </div>
                <div className="writeFormGroup">
                    <textarea name="" id="" cols="30" rows="10" placeholder='tell your story ' type="text" className='writeInput writeText'></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    </div>
  )
}

export default Write;