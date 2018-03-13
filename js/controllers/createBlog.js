
const textArea = document.getElementById('blog-text');
const blogTitle = document.getElementById('blog-title');
const header = document.getElementById('edit-delete-title');
let mode = 'add'; // TODO: make mode an Enum instead of just a string

// Again, POST calls are not working, adding new a post will not persist! Will only update model on FE
function editMode (blog) {
    mode = 'edit';
    textArea.value = blog.text;
    blogTitle.value = blog.title;
    header.innerHTML = 'Editing a Post';
}

function addMode () {
    mode = 'add';
    textArea.value = '';
    blogTitle.value = '';
    header.innerHTML = 'New Post';
}

function save(title, text, id) {
    const blog = new Blog();
    blog.createPost(title, text);
    if (mode === 'add') {
        // POST calls not working atm, mock out res instead
        blogApi.createBlog(blog).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
        blog.id = blogList.length;
        blog.timestamp = new Date();
        blogList.push(blog);
    } else if (mode === 'edit') {
        // POST calls not working atm, mock out res instead
        blogApi.editBlog(blog, null).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
        blog.timestamp = new Date();
        console.log('in edit, id: ' + id);
        blogList[id] = blog;
    }
    displayBlog();
    addMode(); // clear form
}