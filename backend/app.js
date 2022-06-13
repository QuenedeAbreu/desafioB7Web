const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const router = require('./src/router/index.routes');
const sequelize = require('./src/instances/mysql');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router);


sequelize.authenticate()


module.exports = app;