const faker = require('faker');
// const Keyword = require('./model.js');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const generateImages = () => {
  let images = [];
  for (let i = 0; i <= 1000; i++) {
    images.push({ imageUrl: faker.image.fashion() });
  }
  return images;
};

const generateProductName = () => {
  let productName = [];
  for (let i = 0; i <= 1000; i++) {
    productName.push(faker.commerce.productName());
  }
  return productName;
};

const generateKeywords = () => {
  let keywords = [];
  for (let i = 0; i <= 1000; i++) {
    keywords.push(faker.commerce.product());
  }
  return keywords;
};

const keywords = generateKeywords();
const productName = generateProductName();
const images = generateImages();
let counter = 0;

const generateData = () => {
  const random1 = Math.floor(Math.random() * Math.floor(images.length));
  const random2 = Math.floor(Math.random() * Math.floor(images.length));
  const random3 = Math.floor(Math.random() * Math.floor(images.length));

  const imageUrl = [images[random1], images[random2]];
  const imageUrl2 = [images[random2], images[random3]];
  const productInfo = productName[random1];
  const keyword = keywords[random1];

  const data = {
    _id: counter++,
    keyword: keyword,
    products: [
      {
        productName: productInfo,
        images: imageUrl2
      },
      {
        productName: productInfo,
        images: imageUrl
      },
      {
        productName: productInfo,
        images: imageUrl2
      }
    ]
  };
  return data;
};

// console.log(generateData());
// console.log(generateData());
// console.log('counter', counter);
let productData = [];

for (let i = 0; i < 1000; i++) {
  productData.push(generateData());
}

console.log(productData);
// console.log(productData);

let writeStream = fs.createWriteStream(
  path.resolve(__dirname, './productData.json')
);

console.time('Finished generating data');
const createData = async () => {
  for (let i = 1; i <= 10000000; i++) {
    if (
      !writeStream.write(
        JSON.stringify(generateData(i)) + (i === 10000000 ? ']' : ',')
      )
    ) {
      await new Promise(resolve => writeStream.once('drain', resolve));
    }
    if (i === 10000000) {
      console.timeEnd('Finished generating data');
    }
  }
};

writeStream.write('[', createData);
