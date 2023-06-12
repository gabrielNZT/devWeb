const express = require('express');

function configureExpress(app) {
  app.use(express.json());
  app.use(express.static(__dirname));
  app.use(
    express.urlencoded({
      extended: true
    })
  );

  app.set('view engine', 'ejs');
  app.set('views', __dirname + '/views');
}

module.exports = configureExpress;