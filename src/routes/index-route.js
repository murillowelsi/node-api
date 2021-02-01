'use strict';

const express = require('express');
const router = express.Router();


const read = router.get('/', (req, res, next) => {
  res.status(200).send({
    title: "Node Store API - Murillo Welsi",
    version: "0.0.1"
  });
});

module.exports = router;