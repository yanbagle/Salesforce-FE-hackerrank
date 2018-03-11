
function Blog () {
    this.id;
    this.text;
    this.title;
    this.timestamp;
}

Blog.prototype.createPost = function (title, text) {
    this.text = text;
    this.title = title;
};

Blog.prototype.editPost = function (title, text) {
    this.text = text;
    this.title = title;
};


