// let fs = require('fs');
// let faker = require('faker');

// let ten_thousand = 10000;
// let start = 1;
// let stop = ten_thousand;

// for (let i = 0; i <= 10; i++) {
//   writeData(start, stop);
//   function writeData(start, stop) {
//     let header = `keyword, images`;
//     let data = header;
//     let keyword;
//     let images;
//   }
// }

const fastcsv = require('fast-csv');
const fs = require('fs');
const ws = fs.createWriteStream('data.csv', { flags: 'a' });
const faker = require('faker');

const navData = () => {
  let data = {};

  data.keyword = faker.random.word();
  data.images = `https://picsum.photos/id/537/200/300`;

  return data;
};

const seedAmount = 100000000;
const data = [];
for (let i = 0; i < seedAmount; i++) {
  data.push(navData());
}

fastcsv.write(data, { headers: true }).pipe(ws);
