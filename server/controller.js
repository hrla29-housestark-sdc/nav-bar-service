const helper = require('../database/helpers');
const client = require('redis').createClient();

// connect server to DB+models
require('../database/models');

client.on('error', err => {
  console.log('Failed to connect to REDIS', err);
});

module.exports = {
  getDepartments: (req, res) => {
    helper
      .getDepartments()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  },
  getSearchResults: (req, res) => {
    const { _id } = req.params;

    client.get(_id, (err, data) => {
      if (data) {
        res.status(200).send(JSON.parse(data));
      } else {
        helper
          .getSearchResults(_id)
          .then(result => {
            client.setex(_id, 60, JSON.stringify(result));
            res.status(200).send(result);
          })
          .catch(err => res.status(404).send(err));
      }
    });
    // helper
    //   .getSearchResults(_id)
    //   .limit(5)
    //   // .explain('executionStats')
    //   .then(data => res.status(200).send(data))
    //   .catch(err => res.status(404).send(err));
  },

  // getSearchResults: (req, res) => {
  //   const { query } = req.params;
  //   helper
  //     .getSearchResults(query)
  //     .limit(5)
  //     // .explain('executionStats')
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send(err));
  // },
  getAll: (req, res) => {
    helper
      .getAllSearchResults()
      .limit(50)
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
