class Scooter{
  // scooter code here
  constructor(serial, user, station, charge = 100, nextSerial){
    this.serial = serial;
    this.user = user;
    this.station = station;
    this.charge = charge;
    this.nextSerial = nextSerial;
    this.isBroken = isBroken;
    

  }

  
 
  rent(user){
      if(this.charge > 20){
        
      } else {
        throw new Error("scooter needs to charge")
      }

      if (this.isBroken === true){
        throw new Error("scooter needs repair")
      }
  }

  dock(station){
    station.push(Scooter);
    user = "";

  }

}


module.exports = Scooter
