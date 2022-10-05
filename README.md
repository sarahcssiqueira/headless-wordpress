# Headless WordPress

### About WordPress

[WordPress](https://wordpress.org/) is global content management with a market share of 64.4%, **even Beyonce** has her website on WordPress. It's an amazing platform ideal for entrepreneurs, professional developers, or first-time bloggers.

### CMS Architecture

WordPress is one of the most famous **CMS (content management system)**. That means the front end and back end are used in unison, this is referred to as CMS (content management system) architecture which allows everything to be maintained in a single location.

### Headless Architecture

WordPress is an amazing tool with limitless possibilities, one of them is using it in a **“headless” architecture** of the website. On this architecture, the WordPress default front end is canceled, leaving only the back end and the API running on the server side. WordPress will act as a data source for our front-end React application.

We still will be able to continue creating, changing, uploading, and organizing material in the same way we would if you were using a connected system. The main difference is that we will **access our resources using a different front-end solution**.


### Limitless Possibilities

With **WordPress being used as a headless CMS** we can create the front-end of our web applications **using any web technology** we prefer and still manage its content using one of the most popular CMS in the world.

Sometimes, we might come across a situation where we need to add a blog feature to an existing web app built with either React or Angular. Instead, to have coded the full-fledged content management system in the native framework, we can simply use headless WordPress CMS to manage the content using Rest API.

# About React JS

The famous [React](https://reactjs.org/) is a JavaScript library for the web maintained by Facebook and the developer community. JavaScript is a powerful tool for web development, and there are several libraries written in JavaScript to enhance the functionality of websites. ReactJS is mainly used to develop single-page applications that are fast, robust, and dynamic.

### WordPress + React: The best of two worlds

WordPress and React both have a large community and provide a wide range of features. By using **React with Headless WordPress**, we can notice a **significant improvement in the performance and speed of our websites.** Also, it makes redesigning easier and improves the security of our WordPress sites.


# How to setup WordPress for React Js

## Requirements 

For this project we will need:

- WordPress Installation
- XAMPP (for running WordPress locally on Windows)
- [WP-Rest API Plugin](https://br.wordpress.org/plugins/wp-rest-api-controller/)
- [Postman](https://www.postman.com/) for test API on development.
- React App 
- Axios dependency for React (installed using NPM)

After setting up the WordPress website, on a local environment on Windows, using XAMPP for example, we download and install the [WP-Rest API plugin](https://br.wordpress.org/plugins/wp-rest-api-controller/) from the official WordPress Plugins repository. It will enable WordPress Rest API inside our WordPress website.

Then, inside your WordPress website, we must go to Settings → Permalinks and select either Post name or Custom Structure.

Since we are working with API calls, download the chrome extension for **Postman** to verify if the data is available properly via API.

To verify we just need to go ahead and hit the URL in the Postman.
 
The URL should look something like http://localhost/wordpress//wp/v2/posts (replace **"localhost/wordpress"** with your WordPress installation URL). The URLs we will use fetch the posts data from our WordPress site.

On the dashboard of the WP-Rest API plugin, we can control the settings and get all the URLs we need.


# Create a React App

I will not give further details about how to create a react app, it's out of the scope of this project. To see how to do this, check https://reactjs.org/docs/create-a-new-react-app.html

After creating our React App we will need some dependencies:

- [Axios](https://www.npmjs.com/package/axios)

Axios is a promise-based HTTP client for the browser and node.js. It provides a simple to use the library in a small package with a very extensible interface. We can install it with the following command: **npm i Axios**

After Axios install we can launch the React application by running the command **npm start.**

Now, we are all set to build our web application with React using WordPress as headless CMS if everything works properly.

## Components

It's time to create our React components. We will create a new folder ‘components’ inside the src folder, and inside the ‘components’ folder, we will create a new file [‘Posts.js.’](https://github.com/sarahcssiqueira/headless-wordpress/blob/master/src/components/Posts.js).

The 'posts' can be anything you want, that's the magic of custom post types in WordPress.

### Custom post types

There are amazing plugins that can help you with that, but you also can do it with a few lines of code. Check [this repo](https://github.com/sarahcssiqueira/wp-custom-post-type) to see more.


# How to Render Post Data on ReactJS

Inside the Post.js file, we will fetch the data from the WordPress Rest API. Now, inside the [App.js](https://github.com/sarahcssiqueira/headless-wordpress/blob/master/src/App.js) file, we should call the Post component.

App.js is the entry point of our web application. Therefore, it is important to reference the “Posts” components inside this file.

## How to Display Post Data on ReactJS

The data can be displayed by adding the code inside the render method. We will create a new component and name it[‘PostDetails.js’](https://github.com/sarahcssiqueira/headless-wordpress/blob/master/src/components/PostDetails.js) as we want to keep it separate from the parent component.

Note: Make sure to reference the PostDetails component inside the “Posts” component.

# Limit is your creativity

Headless architecture **t is not limited to React**. We can also experiment with **VueJS, Angular, or any JavaScript framework**. There are tons of amazing things we can do with WordPress Rest API.