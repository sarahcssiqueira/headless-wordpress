import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

export class PostDetails extends Component {

   state = {
       imgUrl: '',
       author: '',
       isLoaded: false
   }

   static propTypes = {
       post: PropTypes.object.isRequired
   }

   componentDidMount () {
       const {featured_media, author} = this.props.post;
       const getImageUrl = axios.get(`${featured_media}`);
       const getAuthor = axios.get(`${author}`);
      
       Promise.all([getImageUrl, getAuthor]).then(res => {

           this.setState({
               imgUrl: res[0].data.media_details.sizes.full.source_url,
               author: res[1].data.name,
               isLoaded: true

           });
       });
    }
 
   render() {
       const { title, excerpt } = this.props.post;
       const {author, imgUrl} = this.state;
       return (
           <div>
              <h2>{title.rendered}</h2>
              <img src={imgUrl} alt={title.rendered}/>
              <strong>{author}</strong><br/>
              <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div>
           </div>
       )
   }
}

export default PostDetails;