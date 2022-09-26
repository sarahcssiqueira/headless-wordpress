import React, { Component } from 'react'
import axios from 'axios';
import PostItems from './PostItems';

export class Posts extends Component {
   state = {
       posts: [],
       isLoaded: false
   }

 componentDidMount () {
   axios.get('')
       .then(res => this.setState({
           posts: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }


   render() {
    const {posts, isLoaded} = this.state;
    return (
        <div>
            {posts.map(post =>
            <PostItems 
                key={post.id} 
                post={post}
                />
            )}
        </div>
    );
}
}

export default Posts