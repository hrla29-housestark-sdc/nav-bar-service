FROM node:8

WORKDIR /Users/Steven/Documents/GitHub/SDC

COPY package*json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]