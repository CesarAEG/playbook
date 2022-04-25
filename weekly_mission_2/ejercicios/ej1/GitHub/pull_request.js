const pullRequest = {
    title: "Actualización",
    branchName: "Main",
    dateCreated: new Date(),
    status: true,
    repositoryNameAssociated: "@CesarAEG",

    getStatus: function (){
        return `Status of the PullRequest ${this.status} created in ${this.title} in the branch ${this.branchName}`
    },

    getTitleAndAuthor: function (){
        return `PullRequest created by ${this.repositoryNameAssociated} the day ${this.dateCreated}`
    }
}

console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());