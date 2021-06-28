# StoreFront Implementation

A React app using Redux to manage a virtual storefront interfacing with a live API server hosting the data in Atlas DB via Mongoose.

Cart functionality allows a user to increment, decrement or remove an item altogether from the shopping cart. The cart collects the information and displays the cart total to the user. It is in an accordion dropdown, so you must click the cart to view contents (and clicking again will collapse it). State is managed with multiple redux reducer functions that are joined in the redux store.

Cart controls include the ability to increment, decrement and to remove from the cart altogether. The cart displays a summary total of items in the cart, the line item costs, and the grand total of all items in the cart.

When items are added the cart, their inventory is decreased remotely (and vice versa, as they are released from the cart the available inventory is updated in the database). Items are stored and displayed from a database.

[Live Version at Netlify](https://at-storefront.netlify.app/)

[Documentation for Server](https://github.com/AnneThor/storefront-server/blob/main/README.md)

[Live Server at Heroku](https://at-storefront-server.herokuapp.com/)

Full discussion of database and endpoints is available in the server documentation.

## Documentation as of Week 3

![Updated Diagram of Working System[(./assets/week3.png)

![Current Diagram of Working System](./assets/week1.png)

[Week One Readme](./assets/week1.png)
