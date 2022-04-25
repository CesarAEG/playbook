const trip = {
    user: "Cesar Esquivel",
    startLocation: "Plaza del Sol",
    endLocation: "Centro Magno",
    estimateDuration: 45,
    price: 150,
    payment: "Card",

    getTripInformation: function () {
        return `User ${this.user}, wants to go from ${this.startLocation}, to ${this.endLocation}.`
    },

    getExtras: function () {
        return `Total time of the trip ${this.estimateDuration} minutes for ${this.price} MXN, paymenth method: ${this.payment}.`
    }
}

console.log(trip.getTripInformation());
console.log(trip.getExtras());