const biography = {
    user: "Cesar Esquivel",
    userLink: "www.facebook.com/CesarAEG",
    age: 26,
    bio: "Somos efímeros, bienvenidos todos a mi perfil",
    dateCreated: "11-Apr-2014",
    photos: 320,
    friends: 850,
    followers: 35,

    getInformation: function () {
        return `User ${this.user}, age: ${this.age}, with ${this.photos} photos, account created ${this.dateCreated}.`
    },

    getConections: function () {
        return `Biography: ${this.bio}.`
    }
}

console.log(biography.getInformation());
console.log(biography.getConections());