const textArea = document.getElementById('blog-text');
const blogTitle = document.getElementById('blog-title');
const header = document.getElementById('edit-delete-title');
let mode = 'add'; // TODO: make mode an Enum instead of just a string

function editMode (blog) {
    console.log("in edit mode");
    mode = 'edit';
    textArea.value = blog.text;
    blogTitle.value = blog.title;
    header.innerHTML = 'Editing a Post';
}

function addMode () {
	console.log("in add mode");
	mode = 'add';
	textArea.value = '';
	blogTitle.value = '';
	header.innerHTML = 'New Post';
}

function handleClick(event) {
	event = event || window.event;
	event.target = event.target || event.srcElement;

	let element = event.srcElement;
	const buttonType = element.id.split('-')[0];
	const eleId = element.id.split('-')[1];

	// Climb up the document tree from the target of the event
	while (element) {
		if (element.nodeName === "BUTTON") {
			switch (buttonType) {
				case 'add':
					addMode();
					break;
				case 'save':
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


