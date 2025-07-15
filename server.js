

const express = require('express');
const app = express();

// hello world route
// req = request, res = response
// any changes made requires a refresh in the browser
app.get('/', (req, res) => {
  res.send('Hello World! I am here.');
});

// this is always LAST on the code
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});