const express = require('express');
const siteRouter = express.Router();

siteRouter.get('/', (req, res) => {
  res.render('index', {title: 'Hello World!'});
});

siteRouter.get('/aboutus', (req, res) => {
    res.render('aboutus', {title: 'About Us'});
});

siteRouter.get('/contactus', (req, res) => {
    res.render('contactus', {title: 'Contact Us'});
});

module.exports = siteRouter;