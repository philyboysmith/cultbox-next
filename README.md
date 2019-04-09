# ReactPress ( Rest API edition )

⚠️ I'm not maintaining this project anymore, as i'm using mainly Nuxt.js on my projects now. Feel free to fork and maintain a nice Next.js starter ⚠️

**Reactpress** is a starter-kit to create a Next.js ( **SEO-friendly** React ) front-end backed by Wordpress REST API. 

*Reactpress* is built upon [Next.js](https://github.com/zeit/next.js/) for Server Side Rendering, so if your are not familiar with Next.js, you should take a quick look at it. ⚡ There is also a GraphQL version available : https://github.com/nyl-auster/reactpress-graphql 

<center>

| REACT | NEXT | WORDPRESS |
|:---:|:---:|:---:|
|<img height="80" src="./images/react.svg" /> |  <img height="70" src="./images/next.png" /> | <img height="70" src="./images/wordpress.svg" />

</center>



## GETTING STARTED

### 1 - Wordpress : Make sure CORS are enabled on your Wordpress

Reactpress is only your **front-end**. It's up to you to install Wordpress as you would usually do. Reactpress is relying on [REST API v2](http://v2.wp-api.org), which is automatically enabled since Wordpress 4.7 😊. CORS are special HTTP headers that allows us to pull data from wordpress server API. You can add this to your wp-config.php to make sure Wordpress CORS are fully enabled.

```php
// allow CORS
header("Access-Control-Allow-Origin: *");
```

### 2 - Install Reactpress

Where do you install reactpress ? it's really up to you but, as an example, you can install it just next to your wordpress :

```js
📁 www
  📁 wordpress
  📁 reactpress
```

Then in your reactpress directory:
```sh
# install dependencies
npm install
# start the dev server on http://localhost:3000
npm run dev
```

### 3 - Add your wordpress api endpoint to reactpress.config.js

To connect to your API, edit **reactpress.config.js** file and edit variable **wordpressApiUrl** so that it points to your wordpress API. Don't forget the **wp-json** at the end of the url.

```js
module.exports = {
  wordpressApiUrl: "https://dev-reactpress.pantheonsite.io/wp-json"
};
```

You can now start hacking / editing files from pages and components directories !

## Features

### current:

- SEO Friendly : Server Side Rendered with Next.js
- Seo-friendly urls using wordpress slugs
- Post, Posts list, posts by category, posts by tag
- Page
- Page loader (progress bar)
- Pagination

## CSS

There are several available ways to manage your css with Next.js:

- you can create classic css files and import them like this in your component :

```js
import "../css/globals.css";
```

- *css-in-js* is available with `styled-jsx`, which is shipped by default with Next : https://github.com/zeit/styled-jsx

## Deployment

```sh
# compile for production
npm run build

# start the production server
npm run start
```

*Reactpress* needs a node server, because on the first page load, html is served by a node server (that's why search engines are able to crawl your content).

If you don't want to manage a server yourself, Next.js plays really well with `now` : this is a very easy way to deploy a *next.js* app : https://zeit.co/now
