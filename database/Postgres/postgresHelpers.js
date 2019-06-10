const NavBar = require('./models.js');
// const NavBar = require('./index.js')

module.exports = {
  getResults: query =>
    NavBar.findAll({
      limit: 5,
      where: {
        keyword: {
          $like: `%${query}%`
        }
      }
    }),
  postSearch: data => NavBar.create(data)
};
