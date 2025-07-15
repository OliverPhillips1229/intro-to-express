
const express = require('express');
const morgan = require('morgan'); // for logging requests
const app = express();


// req = request, res = response
// any changes made requires a refresh in the browser
// http method GET
// path argument ---> first argument, always a string
// callback function ---> second argument, always a function
// these will always have the same structure
// req and res are objects that contain information about the request and response
// req is the request object, res is the response object
// res.send() sends a response back to the client
// res.send() can take a string, an object, or an array as an argument
// we wont be using res.send() to send HTML, we will be using it to send JSON data in the future


app.use(morgan('dev')); // use morgan middleware for logging requests







app.get('/express', (req, res) => {
  res.send('<h1>Hello Express! I am here.</h1>');
});

app.get('/new-page', (req, res) => {
  res.send('<h1>This is a new page!</h1>');
  // Note: Only the first res.send() will take effect, subsequent calls will be ignored.
  res.send('<p>Welcome to the new page!</p>');
});

// query parameters
app.get('/home', (req, res) => {
  const name = req.query.name; // Access query parameter 'name'
  const age = req.query.age; // Access query parameter 'age'


  res.send(`<h1>Hello ${name}! You are ${age} years old.</h1>`);
  // Example URL: /home?name=John&age=30
});

// route with a parameters
app.get('/:itemNumber', (req, res) => {
  console.log(req.params.itemNumber);
    // req.params is an object that contains the route parameters
  res.send(`<h1>Item Number: ${req.params.itemNumber}</h1>`);
  // Note: This will match any path like /123, /abc, etc. and return the item number.
});


// www.socialmedia.com/usernames/123456789
// app.get('/usernames/:usernameID')


// this is always LAST on the code
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});