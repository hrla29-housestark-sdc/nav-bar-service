const helper = require('../database/helpers');

// connect server to DB+models
require('../database/models');

module.exports = {
  getDepartments: (req, res) => {
    helper
      .getDepartments()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  },

  getSearchResults: (req, res) => {
    const { query } = req.params;
    helper
      .getSearchResults(query)
      .limit(5)
      // .explain('executionStats')
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  },
  getAll: (req, res) => {
    helper
      .getAllSearchResults()
      .limit(5)
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  },
  post: (req, res) => {
    const { keywords, products } = req.body;
    helper
      .postProduct({ keywords, products })
      .then(() => res.status(200).send('posted '))
      .catch(err => res.status(404).send(err));
  },
  update: (req, res) => {
    const { _id } = req.params;
    helper
      .updateProduct(_id, req.body)
      .then(() => res.status(200).send('Updated'))
      .catch(err => res.status(404).send(err));
  },
  delete: (req, res) => {
    helper
      .deleteProduct()
      .then(() => res.status(200).send('Deleted'))
      .catch(err => res.status(404).send(err));
  },
  random: (req, res) => {
    const letters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ];
    const randomLetter = Math.floor(Math.random() * Math.floor(letters.length));
    helper
      .getSearchResults(letters[randomLetter])
      .limit(5)
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  }
};
