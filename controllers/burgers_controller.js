const express = require('express');
const router = express.Router();
const db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  res.redirect('/index');
});

//get all the burgers 
router.get('/index', function(req, res) {
  db.Burger.findAll({})
  .then(function(data) {
    var hbsObject = {burgers: data};
    console.log(hbsObject);
    res.render('index', hbsObject);
  })
});

//adding a burger to the list
router.post('/create', function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: false
   }).then(function(data) {
    res.redirect('/index');
  });
});

//route to get the id of burger to change to devoured
router.put("/:id", function(req, res) {
  var condition = req.params.id;

  console.log(condition);
  db.Burger.update(
    req.body,
    {
    where: { 
      id: req.params.id
    }
    }).then(function(data) {
    res.redirect('/index');
  });
});

// Export routes for server.js to use.
module.exports = router;