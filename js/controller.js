
const blogList = [];

function init () {
    // create some random blog posts
    const blog = new Blog();
    blog.createPost('title', 'some random blog post');
    blog.timestamp = new Date();
    blogList.push(blog);

    const blog2 = new Blog();
    blog2.createPost('title 2', 'some random blog post 2');
    blog2.timestamp = new Date();
    blogList.push(blog2);

    displayBlog();
}

function displayBlog () {
    const blogEle = document.getElementById('blog');
    let blogPostTemplate = '';
    let displayDate;

    blogList.forEach((blog) => {
        displayDate = `${blog.timestamp.getDate()} 
                        ${blog.timestamp.toLocaleString("en-us", { month: "short" })} 
                        ${blog.timestamp.getFullYear()}`;
        blogPostTemplate +=
            `<div class="container blog-header">
                <h1 class="blog-title">${blog.title}</h1>
                <h1 class="blog-date">${displayDate}</h1>
            </div>
            <div class="blog-text">${blog.text}</div>`;
    });

    blogEle.insertAdjacentHTML( 'beforeend', blogPostTemplate );
}

init();