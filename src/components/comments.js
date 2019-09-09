import React, { Component } from 'react';
class Comment extends Component {
    state = { comments  }
    render() { 
        return ( <label></label> );
    }
    postComment(content,photo_id){
        fetch('http://localhost:8080/comment').post()

    }
    
}
 
export default Comment;