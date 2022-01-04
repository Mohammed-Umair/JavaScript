const person = {
  firstName: "Md",
  getFullname: function (LastName) {
    return this.firstName + " " + LastName;
  },
};
// console.log(person.getFullname)          //[Function: getFullname]
// console.log(person.getFullname())        //md
// const detail = person.getFullname.call(person, "Zaki");
// console.log(detail)                      //[Function: getFullname]
// console.log(detail())                    ///undefined
// console.log(detail); //

// // ///////////////////////////////////////
const person2 = {
  firstname: "zaki",
};
function getfullname2(lastname, city) {
  return this.firstname + " " + lastname + " " + city;
}

console.log(getfullname2.call(person2, "Umair", "nanded")); //call methed
console.log(getfullname2.apply(person2, ["umair", "Pune"])); //Apply method
console.log(getfullname2.bind(person2, "jhon", "Nanded")()); /// bind method 1
console.log(getfullname2.bind(person2)("jhon", "Nanded")); /// bind method 2    most appropraite

// var bikeDetails = {
//   displayDetails: function (registrationNumber, brandName) {
//     return (
//       this.name +
//       " , " +
//       "bike details: " +
//       registrationNumber +
//       " , " +
//       brandName
//     );
//   },
// };

// var person1 = { name: "zakkii" };

// var detailsOfPerson1 = bikeDetails.displayDetails.bind(
//   person1,
//   "TS0122",
//   "splender"
// );

// // Binds the displayDetails function to the person1 object

// console.log(detailsOfPerson1());
// // Returns Vivek, bike details: TS0452, Thunderbird
// function add(number) {
//   if (number <= 0) {
//     return 0;
//   } else {
//     return number + add(number - 1);
//   }
// }
// console.log(add(3));


var cars=2;
do{
  cars/=2;
}while(cars<1);

console.log("Number of cars: " + cars)