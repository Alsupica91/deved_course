const person = {
  firstName: `Xander`,
  lastName: `ouioui`,
  getName() {
    console.log(this.firstName + this.lastName);
  },
};

function registerUser() {
  //Aditional functionallity
  this.getName();
}

const register = registerUser.bind(person);
register();
