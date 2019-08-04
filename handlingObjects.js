// Lets think about Car and Vehicle


// A base class : Vehicle
function createVehicle(name, fuelType){
  return {
    name: name,
    fuelType: fuelType
  };
}


// A derived class : Car
function createCar(name, fuelType) {
  const baseVehicle = createVehicle(name, fuelType);
  return {
    ...baseVehicle,
    type: 'Car',
    step: 0
  }
}

// Now a function which a pure , in sense it does not changes the 
// outside world
// You just pass in the car, it will return you a new car which has already moven forward

function moveForward(car, num) {
  return {
    ...car,
    step: car.step + (num || 1)
  }
}




let audiCar = createCar('Audi');

audiCar = moveForward(audiCar);
audiCar = moveForward(audiCar);
audiCar = moveForward(audiCar);
audiCar = moveForward(audiCar);

console.log(audiCar);


