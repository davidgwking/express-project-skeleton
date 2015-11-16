'use strict';

import './lib/util/sourcemap-support';

import express from 'express';
import serverRoutes from './routes/server';

const PORT = 3000;

let app = express();

app.use('/', serverRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default {
  app: app,
};
