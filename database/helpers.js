const models = require('./models');

module.exports = {
  // getDepartments: () => models.Department.find(),
  getSearchResults: query =>
    models.Keyword.find({ keyword: { $regex: query } }),
  getAllSearchResults: () => models.Keyword.find(),
  postProduct: data => models.Keyword.create(data),
  updateProduct: data => models.Keyword.findOneAndUpdate(data),
  deleteProduct: () => models.Keyword.deleteMany({})
};
