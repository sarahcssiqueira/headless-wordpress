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

- We should use the WP-Rest API plugin. it will enable WordPress Rest API inside our WordPress website.

- Go to Settings → Permalinks and select either Post name or Custom Structure.

- Since we are working with API calls, download the chrome extension for Postman. Inside the Postman, enter the URL in the following format:

https://example.com/wp-json/wp/v2/posts

The above URL will fetch the posts data inside our WordPress site.

To verify that the data is available via API, go ahead and hit the URL inside the Postman.

The URL should look something like https://exampe.com/wp-json/wp/v2/posts.


# What’s ReactJS

React is a JavaScript library for the web maintained by Facebook and the developer community. JavaScript is a powerful tool for web development, and there are several libraries written in JavaScript to enhance the functionality of the websites. ReactJS is mainly used to develop single-page applications that are fast, robust, and dynamic.

- Create a React App
I will not give further details to satrt a react app here
For that, check **npx create-react-app**

- npm i axios

Now, open the folder inside your favorite text editor. I am using the Visual Studio Code.

Launch the application by running the command npm start.

We are all set to build our web application with React using WordPress as headless CMS if everything works properly.

- Create a new folder ‘components’ inside the src folder, and inside the ‘components’ folder, create a new file ‘Posts.js.’


# How to Render Post Data on ReactJS

Inside the Post.js file, we will fetch the data from the WordPress Rest API. In this respository is the code that requests the Rest API end-point and displays the data in JSON format.

This code will show the array of data in the console, which is then utilized inside the render block.

Now, inside the App.js file, we should call the Posts component.


**App.js is the entry point of our web application. Therefore, it is important to reference the “Posts” components inside this file.**

How to Display Post Data on ReactJS
The data can be displayed by adding the code inside the render method.

Instead of displaying data here, we will create a new component and name it ‘BookItems.js’ as I want to keep it separate from the parent component.

Change the render method inside Bookk.js to something like:

Now, we need to render the BookItems component instead.

Inside the BookItems.js, add the following code:

In the code above, I’m referencing the book prop to get the title and other information.

Note: Make sure to reference the BookItems component inside the “Books” component.


## Wrapping up!

Today, I have shown you how to use WordPress with React as a headless CMS for your web application. The React code is also available on Git for you to download. However, **It is not limited to React**. You can also experiment with **VueJS, Angular, or any JavaScript framework**. 
There are tons of things you can do with WordPress Rest API. The sky’s the limit, so go ahead and use WordPress for your next web project.

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
