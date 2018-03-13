
let blogList = [];
const blogApi = new api();
// Adding or editing new post API call is currently not working, persisting mock id on FE
let blogId = -1;

function init () {
    // get all blog posts at the start of app
    displayLoading();
    blogApi.getAllBlogs().then((res) => {
        blogList = res;
		displayBlog();
    }, (err) => {
        console.log(err);
    });

}

function displayLoading () {
	const blogEle = document.getElementById('blog');
	const loadingMessage = `<div class="margin-top">One sec, getting blog posts!</div>`;
	blogEle.insertAdjacentHTML( 'beforeend', loadingMessage );
}

// updates the view
function displayBlog () {
    const blogEle = document.getElementById('blog');
    blogEle.innerHTML = '';
    let blogPostTemplate = '';
    let displayDate;

    blogList.forEach((blog, index) => {
        const blogDate = new Date(blog.timestamp);
        displayDate = `${blogDate.getDate()} 
                        ${blogDate.toLocaleString("en-us", { month: "short" })} 
                        ${blogDate.getFullYear()}`;
        blogPostTemplate +=
            `<div class="container blog-header">
                <h1 class="blog-title">${blog.title}</h1>
                <h1 class="blog-date">${displayDate}</h1>
            </div>
            <div class="blog-text">${blog.text}</div>
            <div class="container buttons">
                <button id="edit-${index}" class="edit-button">edit</button>
                <button id="delete-${index}" class="delete-button">delete</button>
            </div>`;
    });

    blogEle.insertAdjacentHTML( 'beforeend', blogPostTemplate );
}

function handleClick(event) {
    event = event || window.event;
    let element = event.target || event.srcElement;

    const buttonType = element.id.split('-')[0];
    const eleId = element.id.split('-')[1];
    console.log(eleId);

    // Climb up the document tree from the target of the event
    while (element) {
        if (element.nodeName === "BUTTON") {
            switch (buttonType) {
                case 'edit':
                    blogId = eleId;
                    editMode(blogList[eleId]);
                    break;
                case 'delete':
                    handleDelete(eleId);
                    break;
                case 'deleteAll':
                    handleDelete(null);
                    break;
                case 'add':
                    addMode();
                    break;
                case 'save':
                    const title = document.getElementById('blog-title').value;
                    const text = document.getElementById('blog-text').value;
                    save(title, text, blogId);
                    break;
                default:
                    break;
            }
            // The user clicked on a <button> or clicked on an element inside a <button>
            break;
        }
        element = element.parentNode;
    }
}

function handleDelete(buttonId) {
    // delete specific blog post
    if (buttonId) {
        blogApi.deleteBlog(blogList[buttonId].id).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
        blogList.splice(buttonId, 1);
    } else {
        // delete all blogs
        blogApi.deleteAllBlogs().then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
        blogList = [];
    }

    displayBlog();
}

if (document.addEventListener) {
    document.addEventListener("click", handleClick, false);
}
else if (document.attachEvent) {
    document.attachEvent("onclick", handleClick);
}

init();