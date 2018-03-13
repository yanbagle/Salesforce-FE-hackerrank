Hi there! 

I've developed and tested the application in Firefox because Chrome was having Cross origin requests issues. It works fine in Firefox by just opening up the index.html file without having to start up a server. 

A couple of things. The view is separated into 2 seperate files: blog-list and create-blog-form. One is for displaying the blog posts created so far. The other is for adding and editing a blog post. Speaking of which, I was having some issues with the API with all of the POST methods like create new blog post and editing an existing blog post. I am currently getting a 204 No Content response with it. If I have more time, I would definitely look into how to resolve this. With that being said, adding and editing a blog post will not persist, but it will update the FE model in the meantime until the user refreshes the page and the changes will be gone. 

Another thing that I would like to add if I have more time: a spinner for waiting for an http request to complete. Right now, if the user deletes a blog post, I immediately fire off an http request and also update the FE model to display the new changes before the response comes back. This is to let the user know right away that their action was effective and to not block the JS event loop while the async call is happening.

Thanks a lot for your time. I look forward to feedback! 

