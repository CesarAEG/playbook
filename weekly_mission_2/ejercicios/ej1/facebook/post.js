const post = {
    user: "Cesar Esquivel",
    postContent: "Hola a todos",
    postLink: "www.facebook.com/CesarAEG",
    postDateCreated: "11-Apr-2014",
    likes: 320,
    comments: 850,
    shared: 35,

    getPost: function () {
        return `User ${this.user}, post: ${this.postContent} created ${this.postDateCreated}.`
    },

    getinteractions: function () {
        return `Total likes: ${this.likes}, with ${this.comments} comments, and ${this.shared} shares.`
    }
}

console.log(post.getPost());
console.log(post.getinteractions());