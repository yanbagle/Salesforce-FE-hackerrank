function api () {}

const xhttp = new XMLHttpRequest();
const url = "http://restedblog.herokuapp.com/yanzhang/api/";

// POST method calls are currently not working. Keeps returning a 204 no content
api.prototype.createBlog = function (blog) {
    return new Promise(function (resolve, reject) {
        const params = {
            "text": blog.text,
            "title": blog.title
        };
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
        xhttp.open("POST", url);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(params));
    });
};

// POST method calls are currently not working. Keeps returning a 204 no content
api.prototype.editBlog = function (id, blog) {
    return new Promise(function (resolve, reject) {
        const editBlogUrl = url + id;
        const params = {
            "text": blog.text,
            "title": blog.title
        };
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
        xhttp.open("POST", editBlogUrl);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(params));
    });
};

api.prototype.getBlog = function (id) {
    const getBlogUrl = url + id;
    return new Promise(function (resolve, reject) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(xhttp.response));
            } else if (this.status == 404 || this.status === 500) {
                reject({
                    status: this.status,
                    statusText: xhttp.statusText
                });
            }
        };
        xhttp.open("GET", getBlogUrl, true);
        xhttp.send();
    });
};

api.prototype.getAllBlogs = function () {
    return new Promise(function (resolve, reject) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(xhttp.response));
            } else if (this.status == 404 || this.status === 500) {
                reject({
                    status: this.status,
                    statusText: xhttp.statusText
                });
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    });
};

api.prototype.deleteBlog = function (id) {
    return new Promise(function (resolve, reject) {
        const deleteBlogUrl = url + id;
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(xhttp.response));
            } else if (this.status == 404 || this.status === 500) {
                reject({
                    status: this.status,
                    statusText: xhttp.statusText
                });
            }
        };
        xhttp.open("DELETE", deleteBlogUrl, true);
        xhttp.send();
    });
};

api.prototype.deleteAllBlogs = function () {
    return new Promise(function (resolve, reject) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(xhttp.response));
            } else if (this.status == 404 || this.status === 500) {
                reject({
                    status: this.status,
                    statusText: xhttp.statusText
                });
            }
        };
        xhttp.open("DELETE", url, true);
        xhttp.send();
    });
};

api.prototype.getGeneratedBlog = function () {
    return new Promise(function (resolve, reject) {
        const generateUrl = url + 'generateSampleData';
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(xhttp.response));
            } else if (this.status == 404 || this.status === 500) {
                reject({
                    status: this.status,
                    statusText: xhttp.statusText
                });
            }
        };
        xhttp.open("GET", generateUrl, true);
        xhttp.send();
    });
};
