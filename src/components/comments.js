import React, { Component } from 'react';
class Comment extends Component {
    state = { comments  }
    render() { 
        return ( <p align="left" className="card-text">{cmt.content}</p>);
    }
    postComment(content,photo_id){
        fetch('http://localhost:8080/comment').post()

    }
    
}
 
export default Comment;
{photo.comment.map(cmt =>(
    <p align="left" className="card-text">{cmt.content}</p>
  ))};