var express = require('express');
var app = express();
var fakeUser = require('fake-users-array');
var bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', function(req,res) {

  res.json(fakeUser.getUsers());


});

app.get('/users/:id', function(req,res) {
  if (Number.isInteger(parseInt(req.params.id)) && req.params.id >= 0 && fakeUser.getUsersById(req.params.id) != null) {
    res.json(fakeUser.getUsersById(req.params.id));
  } else {
    res.status(404).json({message : 'INVALID ID'})
  }

});

app.delete('/users/:id', function(req,res) {
  if (Number.isInteger(parseInt(req.params.id)) && req.params.id >= 0 && fakeUser.deleteUserById(req.params.id) != null) {
    res.json(fakeUser.deleteUserById(req.params.id));
  } else {
    res.status(404).json({message : 'INVALID ID'})
  }

});

app.post('/users', function(req,res) {
  if (req.body.hasOwnProperty('name') &&
      req.body.hasOwnProperty('surname') &&
      req.body.hasOwnProperty('dateOfBirth') &&
      req.body.hasOwnProperty('email')) {

      res.status(201).json(fakeUser.addUser(req.body));
  }else {
    res.status(400).json({ message : 'ERROR! A new user must have : name, surname, dateOfBirth, email' });
  }
});

app.put('/users/:id', function(req,res) {
  if (Number.isInteger(parseInt(req.params.id)) && req.params.id >= 0 && fakeUser.getUsersById(req.params.id) != null
      && isNaN(req.body.name) && isNaN(req.body.surname) && isNaN(req.body.email)
      && fakeUser.modifyUserById(req.params.id,req.body) != null) {
    res.status(201).json(fakeUser.modifyUserById(req.params.id, req.body));
  }else if (fakeUser.getUsersById(req.params.id) == null || fakeUser.modifyUserById(req.params.id,req.body) == null) {
    res.status(404).json({message: 'INVALID ID'});
  }else {
    res.status(400).json({message : 'ERROR!'})
  }
});

app.put('/users', function(req,res) {
  res.json(fakeUser.reset());

})

module.exports = app;
app.listen(3001);
