import React from 'react';
import "./singlePost.css";

const SinglePost = () => {
  return (
    <>
        <div className="singlepost">
<div className="singlePostWrapper">
    <img src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" alt="" className="singlePostImg" />
   <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
   <div className="singlePostEdit">
   <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
   <i className="singlePostIcon fa-solid fa-trash-can"></i>
    </div>  </h1>
<div className="singlePostInfo">
    <span className="singlePostAuthor">
        Author:<b>Authorone</b>
    </span>
    <span className="singlePostDate">
1 hr ago
    </span>
</div>
<p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, placeat exercitationem! Labore quisquam
     placeat sunt mollitia aliquam veniam amet nisi, exercitationem perspiciatis 
    ea sint incidunt magni ipsa porro vero sequi 
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Laborum reiciendis iure impedit voluptates ea voluptatibus possimus autem sint blanditiis
      pariatur eligendi ex obcaecati aperiam voluptate,
     consectetur dolore itaque dolor aliquam?</p>

</div>
        </div>
    </>
  )
}

export default SinglePost