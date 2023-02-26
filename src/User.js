class User {
  // User code here
  constructor(username = "", password = "", age, loggedIn){
 this.username = username;
 this.password = password;
 this.age = age;
 this.loggedIn = loggedIn;
  }
logIn(){
if (password === password){
  loggedIn = true;
  return this.loggedIn;
} else {
  throw new Error('incorrect password')
}
}
logOut(){
  if (loggedIn === false){
      
  }
}

}



module.exports = User
