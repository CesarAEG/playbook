const user = {
    user: "Cesar",
    userName: "@antarsays",
    age: 26,
    bio: "Somos efímeros",
    dateCreated: "11-Apr-2014",
    tweets: 5826,
    followers: 350,
    following: 200,

    getInformation: function () {
        return `User name ${this.name} with tag ${this.userName}, account created ${this.dateCreated}.`
    },

    getInteractions: function () {
        return `Total tweets: ${this.tweets}, following ${this.following} users and having ${this.followers} followers.`
    }
}

console.log(user.getInformation());
console.log(user.getInteractions());