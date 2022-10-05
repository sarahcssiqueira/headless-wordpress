import React, { Component } from 'react'
import axios from 'axios';
import PostDetails from './PostDetails';

export class Posts extends Component {
   state = {
       posts: [],
       isLoaded: false
   }

 componentDidMount () {
    axios.get('http://localhost/wordpress/wp-json/wp/v2/post')
       .then(res => this.setState({
           posts: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }
   
   render() {
    const {posts} = this.state;
    return (
        <div>
            {posts.map(post =>
            <PostDetails 
                key={post.id} 
                post={post}
                />
            )}
        </div>
    );
}
}

export default Posts;