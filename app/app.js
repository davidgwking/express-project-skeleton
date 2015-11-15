'use strict';

var express = require('express');

const PORT = 3001;

var app = express();

app.get('/ping', (request, response) => {
  response.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
