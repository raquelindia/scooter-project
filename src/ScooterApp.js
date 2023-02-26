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
 
loginUser(username, password){

}

logoutUser(username){

}

createScooter(station){
  if (!station){
    throw new Error('no such station');
  }
  let newScooter = new Scooter()
  this.stations.push(newScooter);

}

dockScooter(scooter, stations){
  if(!stations){
    throw new Error('no such station')
  }
  for (let i = 0; i < stations.length; i++){
    if (stations[i] === scooter){
      throw new Error('scooter already at station')
    }
  }

 this.stations.push(scooter);
 console.log('scooter is docked')
}

rentScooter(scooter, user){
 if(user){
  throw new Error('scooter already rented')
 }

 for (let i = 0; i < stations.length; i++){
  for (let j = 0; j < stations[i].length; j++){
    if(stations[i][j] === scooter){
      this.stations.splice(stations[i][j], stations[i][j]);
      console.log('scooter is rented')
    }
  }
 }
}

print(){
  console.log(stations, stations.length);
  console.log(registeredUsers);

}

}

module.exports = ScooterApp
