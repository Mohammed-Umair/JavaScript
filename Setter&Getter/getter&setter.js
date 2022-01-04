const perosn = {
  FirstName: "abc",
  lastName: "xyz",
  get naamDo() {
    //{get method is immutable, value ko update karta}
    return `Naam hai ${this.FirstName} ${this.lastName} `;
  },
  set naamDo(value) {
    ///{function me kuch add karna hai to use karte}
    const parts = value.split(" "); //[first ,second]
    this.FirstName = parts[0];
    this.lastName = parts[1];
  },
};
perosn.naamDo = "MD UMAIR";
console.log(perosn.naamDo);
