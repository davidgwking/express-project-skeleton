import express from 'express';

var router = express.Router();

router.route('/ping')
  .get(function(request, response) {
    response.send('pong!');
  });

export default router;
