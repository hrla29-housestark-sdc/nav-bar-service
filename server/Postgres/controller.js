// const helper = require('../../database/Postgres/postgresHelpers.js');

// module.exports = {
//   postgresGetProduct: (req, res) => {
//     const { query } = req.params;
//     // console.log(req.params);
//     // console.log('query', query);
//     helper
//       .getResults(query)
//       .then(data => res.status(200).send(data))
//       .catch(err => res.status(404).send(err));
//   },
//   postSearch: (req, res) => {
//     const { keyword, products } = req.body;
//     console.log('testing to see if it reaches here');
//     console.log(keyword);
//     helper
//       .postSearch({ keyword, products })
//       .then(() => console.log('testig post function'))
//       .catch(err => console.error(err));
//   },
//   random: (req, res) => {
//     const letters = [
//       'a',
//       'b',
//       'c',
//       'd',
//       'e',
//       'f',
//       'g',
//       'h',
//       'i',
//       'j',
//       'k',
//       'l',
//       'm',
//       'n',
//       'o',
//       'p',
//       'q',
//       'r',
//       's',
//       't',
//       'u',
//       'v',
//       'w',
//       'x',
//       'y',
//       'z'
//     ];
//     const randomLetter = Math.floor(Math.random() * Math.floor(letters.length));
//     helper
//       .getResults(letters[randomLetter])
//       .then(data => res.status(200).send(data))
//       .catch(err => res.status(404).send(err));
//   }
// };
