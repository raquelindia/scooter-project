const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers){
    this.stations = stations;
    this.registeredUsers = registeredUsers;

  }
registerUser(username, password, age){
 let count = 0;
 for (let i =  0; i < this.registeredUsers; i++){
  if (registeredUsers[i] === username){
    count++;
  }
 }
 if(count > 0){
  console.log('already registered');
} 
if (age < 18){
  throw new Error('too young to register')
} 
if (count === 0 && age >= 18){
  console.log('user has been registered')
}

}
 }
loginUser(username, password){

}

logoutUser(username){

}

createScooter(station){
  if (!station){
    throw new Error('no such station');
  }

}

dockScooter(scooter, station){
  if(!station){
    throw new Error('no such station')
  }
  for (let i = 0; i < station.length; i++){
    if (station[i] === scooter){
      throw new Error('scooter already at station')
    }
  }

 station.push(scooter);
 console.log('scooter is docked')
}

rentScooter(scooter, user){
 
}

print(){
  console.log(stations, stations.length);
  console.log(registeredUsers);

}

}

module.exports = ScooterApp
