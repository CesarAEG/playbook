const user = {
    user: "Cesar Esquivel",
    userLink: "www.facebook.com/CesarAEG",
    age: 26,
    dateCreated: "11-Apr-2014",
    photos: 320,
    friends: 850,
    followers: 35,

    getInformation: function () {
        return `User ${this.user}, age: ${this.age}, with ${this.photos} photos, account created ${this.dateCreated}.`
    },

    getConections: function () {
        return `Total friends: ${this.friends}, with ${this.followers} followers.`
    }
}

console.log(user.getInformation());
console.log(user.getConections());