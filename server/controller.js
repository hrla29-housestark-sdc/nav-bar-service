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
    console.log(req.params);
    helper
      .getSearchResults(query)
      .limit(5)
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
  }
};
