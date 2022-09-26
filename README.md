# Headless Wordpress

### About WordPress

WordPress is global content management with a market share of 64.4%, **even Beyonce** has her website on WordPress

### CMS (content management system) Architecture

When the front end and back end are used in unison, this is referred to as a coupled **CMS (content management system)architecture.** This allows everything to be maintained in a single location, such as WordPress, which is perfect for entrepreneurs, bloggers, and business owners.

### Headless Architecture

Using a **“headless” architecture** of the website, the platform’s front end is canceled, leaving only the back end and the API running on the server-side.

Naturally, we will be able to continue creating, changing, uploading, and organizing material in the same way we would if you were using a connected system. 

The main difference is that we will **access our resources using a different front-end solution** referred to as REST API.

With WordPress being used as a headless CMS allows us to create the front-end of our web applications using any web technology and manage its content using one of the most popular CMS.

You might come across the situation where you need to add a blog feature in an existing web app built with either React or Angular. Instead of coding the full-fledged content management system in the native framework, use headless WordPress CMS to manage the content using Rest API.

### WordPress + React: The best of two worlds

WordPress and React both have a large community and provide a wide range of features. By using **React with Headless WordPress**, we can notice a **significant improvement in the performance and speed of our websites.** 
Additionally, it makes redesigning easier and improves the security of our WordPress sites.


- Powers over 43% of the web
- Largest open source CMS community
- User-friendly and extensible
- Powerful block editor extensible using React


React
- Great developer and user experience
- Scalable and well-established option
- Largest open source front-end community



# How to setup WordPress for React Js

Let’s begin with setting up the WordPress site, as this will act as a data source for our front-end React application.

Download the zip file of the WP-Rest API plugin from git and upload the zip folder inside your WordPress plugins folder. Once the file is uploaded, activate the plugin. This will enable WordPress Rest API inside your WordPress website.

Go to Settings → Permalinks and select either Post name or Custom Structure.

Since we are working with API calls, download the chrome extension for Postman. Inside the Postman, enter the URL in the following format:

https://example.com/wp-json/wp/v2/posts

The above URL will fetch the posts data inside your WordPress site.

Download the Custom Post Type UI plugin for creating custom post types. This custom post will be displayed when we use WordPress with React in the next step.

Install and activate the plugin and add a new post type. For this tutorial, I will be creating a custom post type for **Books**.

Inside the Post Type Slug, type the name of your custom post.
Ensure that Show in REST API checkbox is set to true and REST API base slug is also set. This is mandatory if you wish to use WordPress as headless CMS.

To verify that the data is available via API, go ahead and hit the URL inside the Postman.

Now, the URL should look something like https://exampe.com/wp-json/wp/v2/books.

We can also add further fields like Publisher by using ACF and ACF to RestAPI plugins.

What’s ReactJS
React is a JavaScript library for the web maintained by Facebook and the developer community. JavaScript is a powerful tool for web development, and there are several libraries written in JavaScript to enhance the functionality of the websites. ReactJS is mainly used to develop single-page applications that are fast, robust, and dynamic.

Setting up React App
To build React apps, you need to have the following dependencies installed on your computer.

NodeJS & NPM.
Text Editor such as Sublime or Visual Studio Code.
Git for version controlling (Optional)
After setting up the environment, open the command line and run the following code to create the project with ReactJS.

npx create-react-app frontend
Once the app is created, cd (change directory) to the application folder and type the following command to install the Axios package for API calls.

npm i axios
Now, open the folder inside your favorite text editor. I am using the Visual Studio Code.

Launch the application by running the command npm start.

We are all set to build our web application with React using WordPress as headless CMS if everything works properly.

Create a new folder ‘components’ inside the src folder, and inside the ‘components’ folder, create a new file ‘Books.js.’

How to Render Post Data on ReactJS
Inside the Book.js file, we will fetch the data from the WordPress Rest API. Below is the code that requests the Rest API end-point – which in my case is ‘/books’ – and displays the data in JSON format.

import React, { Component } from 'react'
import axios from 'axios';
export class Books extends Component {
   state = {
       books: [],
       isLoaded: false
   }
 componentDidMount () {
   axios.get('https://wordpress-179008-1030625.cloudwaysapps.com//wp-json/wp/v2/books/')
       .then(res => this.setState({
           books: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }
   render() {
      console.log(this.state);
       return (
           <div>
              
           </div>
       )
   }
}
export default Books
The above code will show the array of data in the console, which is then utilized inside the render block.

Now, inside the App.js file, call the Books component as shown below.

import React from 'react';
import './App.css';
import Books from './components/Books';
function App() {
 return (
   <div className="App">
    <Books/>
   </div>
 );
}
export default App;
App.js is the entry point of our web application. Therefore, it is important to reference the “Books” components inside this file.

How to Display Post Data on ReactJS
The data can be displayed by adding the code inside the render method.

render() {
       const {books, isLoaded} = this.state;
       return (
           <div>
               {books.map(book =>
               <h4>{book.title.rendered}</h4>
               )}
           </div>
       );
   }
Instead of displaying data here, we will create a new component and name it ‘BookItems.js’ as I want to keep it separate from the parent component.

Change the render method inside Bookk.js to something like:

render() {
       const {books, isLoaded} = this.state;
       return (
           <div>
               {books.map(book =>
               <BookItems key={book.id} book={book}/>
               )}
           </div>
       );
   }
Now, we need to render the BookItems component instead.

Inside the BookItems.js, add the following code:

import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
export class BookItems extends Component {
 
   render() {
       const { title } = this.props.book;
       return (
           <div>
              <h2>{title.rendered}</h2>
           </div>
       )
   }
}
export default BookItems
In the code above, I’m referencing the book prop to get the title and other information.

Note: Make sure to reference the BookItems component inside the “Books” component.

My final version of BookItems.js looks something like this:

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
export class BookItems extends Component {
   state = {
       imgUrl: '',
       author: '',
       isLoaded: false
   }
   static propTypes = {
       book: PropTypes.object.isRequired
   }
   componentDidMount () {
       const {featured_media, author} = this.props.book;
       const getImageUrl = axios.get(`https://wordpress-179008-1030625.cloudwaysapps.com//wp-json/wp/v2/media/${featured_media}`);
       const getAuthor = axios.get(`https://wordpress-179008-1030625.cloudwaysapps.com//wp-json/wp/v2/users/${author}`);
      
       Promise.all([getImageUrl, getAuthor]).then(res => {
           console.log(res);
           this.setState({
               imgUrl: res[0].data.media_details.sizes.full.source_url,
               author: res[1].data.name,
               isLoaded: true
           });
       });
    }
 
   render() {
       const { title, excerpt } = this.props.book;
       const {author, imgUrl, isLoaded} = this.state;
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
export default BookItems
And the output in the browser looks like this:


Not the prettiest one, right? Well, that’s because styling is out of the scope of this tutorial.

Wrapping up!
Today, I have shown you how to use WordPress with React as a headless CMS for your web application. The React code is also available on Git for you to download. However, It is not limited to React. You can also experiment with VueJS, Angular, or any JavaScript framework. There are tons of things you can do with WordPress Rest API. The sky’s the limit, so go ahead and use WordPress for your next web project.

Frequently Asked Questions
Q. What is headless WordPress?
When WordPress is used as a CMS to manage only the content of a decoupled front-end web app, it is known as a WordPress headless CMS.

Q. What is React?
React is a JavaScript library maintained by Facebook and community developers. It is used to build the user interface of modern web applications.

Q. Can you use React with WordPress?
Yes, React can be used with WordPress, as in the example above, where the content on the front-end built with React is managed by WordPress CMS using the WP Rest API.

Q. Can WordPress be used as a headless CMS?
WordPress is the most flexible CMS that allows you to create almost any type of website. Its open-source nature means that you can use WordPress as a headless CMS.

Q. Is Headless WordPress more secure?
Yes, to some extent, headless WordPress makes your website more secure as hackers cannot access your backend.


Credits: https://www.cloudways.com/blog/use-react-with-wordpress-to-create-headless-cms/
https://wpwebinfotech.com/blog/headless-wordpress-react/
