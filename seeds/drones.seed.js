// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model')

//a- create array of 3 objects
const drones = [
    { name: "General XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Kreepour 57", propellers: 4, maxSpeed: 20 },
    { name: "Atomics 3000i", propellers: 6, maxSpeed: 18 }
  ];

//b- establish the connection to the database 
require ('./../db/index.js');


Drone.create(drones)
.then((drones) => {console.log (`${drones.length} drones inserted`)
mongoose.connection.close();
}  

)

.catch( (error) => {console.log('An error hapened', error) })





