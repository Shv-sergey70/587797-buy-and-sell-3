const {Router} = require('express');

myRouter = Router();

myRouter.get('/', (req, res) => {
  res.render(`my/my-tickets`, {
    isAuth: true
  })
});
myRouter.get('/comments', (req, res) => {
  res.render(`my/comments`, {
    isAuth: true,
    comments: [1]
  })
});

module.exports = myRouter;