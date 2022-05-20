const express = require('express');
const app = express();

const port = process.env.PORT || 8181;

app.listen(port, () => {
  console.log('server is running');
});
