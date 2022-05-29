const person = {
  firstName: "Name",
  lastName: "Surname",
  get fullName () {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

const john = Object.create(person);
const simon = Object.create(person);

john.fullName = "John Doe";
simon.fullName = "Simon Collins";

console.log(john.fullName); // John Doe
console.log(simon.fullName); // Simon Collins