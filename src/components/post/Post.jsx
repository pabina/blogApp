import React from 'react';
import "./post.css";
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <>
    <div className="post">
      <Link to= "post/`${1}`" className='link'>
       
    <img src="https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="" 
    className="postImg" /> 
    
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem rerum, sunt aperiam eveniet ut repellat quas tenetur dolor aliquam ab enim voluptatibus labore a dignissimos alias, eligendi 
      necessitatibus distinctio provident!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ad deserunt magni at necessitatibus perspiciatis est omnis suscipit dolorem? Ipsum a et fuga vitae 
      adipisci ipsa dolores accusantium reiciendis magnam!
    </p>
    </Link>
    </div>
    </>
  )
}

export default Post