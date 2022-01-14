const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones

  // ... your code here
Drone.find()
.then((drones) => {
  res.render('drone/list',{drones}); })

.catch( (error) => {console.log('An error haapened', error) })

})

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  // ... your code here
  res.render("drones/create-form.hbs")
  
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name,propellers,maxSpeed}=req.body

  Drone.create({ name, propellers, maxSpeed })
  .then(() => {
    res.redirect('/drones');
  })
  .catch( (error) => {
    res.render('drones/create-form', error );
    });
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  Drone.findById (id) 
    .then ( (drone) => {
      res.render("drones/update-form.hbs",drone)})

    .catch ( (error) => { 
      console.log ("error occured",error)    })

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {name,propellers,maxSpeed}=req.body
  Drone.findByIdAndUpdate({name,propellers,maxSpeed})
  .then ( () => {
    res.redirect("/drones")
  })
  .catch ((error) => {
res.render("../views/drones/update-form.hbs",error)
  })
  
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete (req.params.id)
  .then (() => {
   res.redirect ("/drones")
  })
 .catch ((error) => {
console.log("An error has occured",error)
 })
});

module.exports = router;
