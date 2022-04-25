const profile = {
    user: "Cesar Esquivel",
    age: 26,
    location: "Guadalajara",
    calification: 5,
    trips: 350,
    payment: ["Card", " Cash"],

    getInformation: function () {
        return `User ${this.user}, age: ${this.age}, location: ${this.location} and ${this.calification} stars.`
    },

    getTrips: function () {
        return `Total trips: ${this.trips}, payment method: ${this.payment}.`
    }
}

console.log(profile.getInformation());
console.log(profile.getTrips());