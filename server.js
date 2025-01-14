'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/index.html', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);