const express = require('express');
const router = express.Router();
const Car = require('../models/cars');

router.get('/cars', function(req, res, next){
  Car.geoNear(
    {type:'Point', coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    {maxDistance: 100000, spherical: true}).then(function(cars){
      res.send(cars);
    });
});

router.post('/cars', function(req, res, next){
  Car.create(req.body).then(function(car){
    res.send(car);
  }).catch(next);

});

router.put('/cars/:id', function(req, res, next){
  Car.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Car.findOne({_id: req.params.id}).then(function(car){
      res.send(car);
    });
  });

});

router.delete('/cars/:id', function(req, res, next){
  Car.findByIdAndRemove({_id: req.params.id}).then(function(car){
    res.send(car);
  });

});

module.exports = router;
