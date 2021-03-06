const serverless = require('serverless-http');
const express = require('express');
//const database = require('../configs/connect');
//const userdetail = require('../models/userdetail');
const dbJson = require('../db/db.json');

const app = express();
const router = express.Router();

//database.connect();

router.get('/', (req, res, next) => {
  res.send('<h1><a href="/.netlify/functions/api/JSON">CLICK HERE - CONNECT JSON</a></h1>');
});

router.get('/JSON', (req, res) => {
  res.json(dbJson)
});

//app.use(express.json());
//app.use(express.urlencoded( { extended:true } ));
// path must route to lambda
app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);