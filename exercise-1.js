const john = {
  firstName: "John",
  lastName: "Doe",
  get fullName () {
    return `${john.firstName} ${john.lastName}`
  }
}

const simon = {
  firstName: "Simon",
  lastName: "Collins",
  get fullName () {
    return `${simon.firstName} ${simon.lastName}`
  }
}

console.log(john.fullName); // John Doe
console.log(simon.fullName); // Simon Collins