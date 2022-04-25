const issue = {
    title: "Repo LaunchX",
    repositoryNameAssociated: "LaunchX-Issues",
    status: "Iniciado",
    numberOfComments: 200,
    labels: 50,
    author: "@CesarAEG",
    dateCreated: "Two days ago",
    lastUpdated: new Date(),

    getTitleAndAuthor: function(){
        return `This repository ${this.title} was created by ${this.author}`
    },

    getGeneralInfo: function(){
        return `This repository has ${this.numberOfComments} commets and ${this.labels}`
    }
}

console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());
console.log("Created: " + issue.dateCreated);
console.log("Las Updated: " + issue.lastUpdated);