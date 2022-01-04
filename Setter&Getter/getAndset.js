const person = {
  firstname: "Sameer",
  lastName: "Khan",
  get getFullName() {
    return `First Name: ${this.firstname} LastName:${person.lastName}`;
  },
  set getFullName(anything) {
    const splitted = anything.split(" ");
    this.firstname = splitted[0];
    this.lastName = splitted[1];
  },
};
person.getFullName = "Zaki 123" ;
console.log(person.getFullName);
