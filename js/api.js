function api () {}

const xhttp = new XMLHttpRequest();
const url = "https://restedblog.herokuapp.com/hackerrank/api/";

api.prototype.createBlog = function (blog) {
    return new Promise(function (resolve, reject) {
        const params = `text=${blog.text}title=${blog.title}`;
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(xhttp.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhttp.statusText
                });
            }
        };
        xhttp.open("POST", url, true);
        xhttp.send(params);
    });
};

api.prototype.editBlog = function (id, blog) {

};

api.prototype.getBlog = function (id) {

};

api.prototype.getAllBlogs = function () {

};

api.prototype.deleteBlog = function (id) {

};

api.prototype.deleteAllBlogs = function () {

};

api.prototype.getGeneratedBlog = function () {

};
