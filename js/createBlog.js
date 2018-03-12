function editMode (blog) {
    console.log("in edit mode");
    const textArea = document.getElementById('blog-text');
    textArea.value = blog.text;

    const blogTitle = document.getElementById('blog-title');
    blogTitle.value = blog.title;

    const header = document.getElementById('edit-delete-title');
    header.innerHTML = 'Editing a Post';
}