const hashtag = {
    tag: "#SaveThePlanet",
    createdBy: "@antarsays",
    interactions: 2650,
    date: new Date(),

    getInformation: function () {
        return `Hashtag ${this.tag} started by ${this.createdBy}.`
    },

    getInteractions: function () {
        return `Total interactions: ${this.interactions} until ${this.date}`
    }
}

console.log(hashtag.getInformation());
console.log(hashtag.getInteractions());