// making a change

const express = require('express');
const app = express();

// hello world route
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
app.get('/home', (req, res) => {
  res.send('<h1>Hello World! I am here.</h1>');
});

app.get('/express', (req, res) => {
  res.send('<h1>Hello Express! I am here.</h1>');
});

app.get('/new-page', (req, res) => {
  res.send('<h1>This is a new page!</h1>');
  // Note: Only the first res.send() will take effect, subsequent calls will be ignored.
  res.send('<p>Welcome to the new page!</p>');
});

// this is always LAST on the code
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});