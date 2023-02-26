const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers){
    this.stations = stations;
    this.registeredUsers = registeredUsers;

  }
registerUser(username, password, age){

}
loginUser(username, password){

}

logoutUser(username){

}

createScooter(station){

}

dockScooter(scooter, station){

}

rentScooter(scooter, user){
 
}

print(){
  console.log(stations, stations.length);
  console.log(registeredUsers);

}

}

module.exports = ScooterApp
