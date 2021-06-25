# StoreFront Implementation

A React app using Redux to manage a virtual storefront interfacing with a live API server hosting the data in Atlas DB via Mongoose.

**Not yet connected to live backend!**

Added cart functionality that allows a user to increment, decrement or remove an item altogether from the shopping cart. The cart collects the information and displays the cart total to the user. It is in an accordion dropdown, so you must click the cart to view contents (and clicking again will collapse it). State is managed with multiple redux reducer functions that are joined in the redux store.

[Live Version at Netlify](https://at-storefront.netlify.app/)

[Documentation for Server](https://github.com/AnneThor/storefront-server/blob/main/README.md)

[Live Server at Heroku](https://at-storefront-server.herokuapp.com/)

Full discussion of database and endpoints is available in the server documentation.

## Week 1 Documentation

![Current Diagram of working app](./assets/week1.png)

[Week One Readme](./assets/week1.png)
