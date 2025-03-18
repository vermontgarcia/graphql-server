require('dotenv').config;
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { initDB } = require('./src/database/connect');
const gqSchema = require('./src/graphql/gqSchema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: gqSchema,
    graphql: true,
  })
);

initDB((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT, () => {
      console.log(`Server running and Listening on port: ${process.env.PORT}`);
    });
  }
});
