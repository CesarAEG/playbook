const trendingTopic = {
    topic: "Animals",
    usersInterating: 10850,
    interactions: 265000,
    mainTags: [ " #animals",
                " #dogs",
                " #cats",
                " #birds",
                " #dolphins"],
    startDate: "15-05-2021",

    getTopic: function () {
        return `Trending topic ${this.topic} containing ${this.mainTags}.`
    },

    getInteractions: function () {
        return `Total interactions: ${this.interactions} by ${this.usersInterating} users from ${this.startDate}.`
    }
}

console.log(trendingTopic.getTopic());
console.log(trendingTopic.getInteractions());