const uuid = require('uuid')
const express = require('express');
const router = express.Router();


//Airplane Model
const Airplane = require('../../models/Airplane');

//@route    GET api/airplanes
//@desc     Get all airplanes
//@access   Public
router.get('/', (req, res)=> {
    Airplane.find()
    .sort({_id: 1})
    .then(airplanes => res.json(airplanes))
});

//@route    POST api/airplanes
//@desc     Create an airplane
//@access   Public (Change to private)
router.post('/', (req, res)=> {
    const newAirplane = new Airplane({
        // _id: req.body._id,
        // _id: "test",
        _id: uuid(),
        name: req.body.name
        // registrationCode: req.body.registrationCode,
        // airplaneModel: req.body.airplaneModel,
        // price: req.body.price
        
        
    });
   newAirplane.save().then(airplane => res.json(airplane)); 
});

//@route    DELETE api/airplanes/:id
//@desc     Delete an airplane
//@access   Public (Change to private)
router.delete('/:_id', (req, res)=> {
    Airplane.findById(req.params._id)
    .then(airplane => airplane.remove().then(() => res.json({success: true})))
    .catch(err =>res.status(404).json({success: false}));
});
    
   

module.exports = router;