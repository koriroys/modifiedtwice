module.exports = function(app) {
  var express = require('express');
  var booksRouter = express.Router();

  booksRouter.get('/', function(req, res) {
    res.send({
      'books': [
        {
          id: 1,
          title: "Game of Thrones"
        }
      ]
    });
  });

  booksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  booksRouter.get('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.put('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/books', booksRouter);
};
