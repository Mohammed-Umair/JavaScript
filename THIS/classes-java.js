class person {
  constructor(fname, lname) {
    //grandparents
    this.firstName = fname;
    this.lastName = lname;
  }
  greeting() {
    return `Welcome ${this.firstName} ${this.lastName}`;
  }
}
// const output =new person("mohd","umair")
// console.log(output.greeting())

class Contact extends person {
  //     parent
  constructor(fname, lname, phone, city) {
    super(fname, lname);
    this.phone = phone;
    this.city = city;
  }
  getContact() {
    return `phone: ${this.phone} city: ${this.city}`;
    //   return "phone: ${this.phone} city: ${this.city}"    ///nahi chalega
  }
}
const output1 = new Contact("Mohd", "Zaki", 778478346, "Degloor Naka");
console.log(output1);
console.log(output1.getContact()); //calling method     isme parent ke method ko bhi excess kar sakte (output.greeting,output.get)

