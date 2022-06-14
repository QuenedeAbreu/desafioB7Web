const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const router = require('./src/router/index.routes');
const sequelize = require('./src/instances/mysql');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router);


sequelize.authenticate()


module.exports = app;