const models = require('./models');

module.exports = {
  // getDepartments: () => models.Department.find(),
  // getSearchResults: query =>
  //   models.Keyword.find({ keyword: { $regex: query } }),
  getSearchResults: _id => models.Keyword.findById(_id),
  // getSearchResults: query => {
  //   // return models.Keyword.find(
  //   //   { _id: { $gte: 9000000, $lte: 10000000 } },
  //   //   { keyword: { $regex: query } }
  //   // );
  //   return models.Keyword.find({
  //     _id: { $gte: 9000000, $lte: 10000000 },
  //     keyword: { $regex: query }
  //   });
  // },
  getAllSearchResults: () => models.Keyword.find(),
  postProduct: data => models.Keyword.create(data),
  updateProduct: data => models.Keyword.findOneAndUpdate(data)
  // deleteProduct: () => models.Keyword.deleteMany({})
};
