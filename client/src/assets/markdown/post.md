# About post
A post is a markdown file. We use a MongoDB database to save post metadata such as title, authors and keywords, so a user can find what he/she needs quickly.

You can use the navigation menu to read through posts; you can search for a post by its metadata; you can also add your own post to share your learnings with the rest of the team.

- To find a post: click on menu &rarr; post &rarr; search posts
- To create a new post:
	1. Clone this project <mark>git@ssh.dev.azure.com:v3/HanoverSolutionsDevelopers/Solutions%20Developers/techdoc</mark>
	2. Create a new markdown file under <mark>/client/src/assets/markdown</mark> or one of its sub-directories.
	3. Depending on the contents of your post, create a new component under whichever module you think appropriate. For example: front end, back end, tooling, etc.
	4. Render the markdown file (step 2) in the component template (step 3).
	5. Update routing to assign a URL to your post.
	6. Click on <mark>menu &rarr; post &rarr; add a post</mark> to populate post metadata. The data will live in MongoDB and your post will become searchable. 
	7. Make sure 'URL to article' field has only relative URL starting at the module level. For example 'front-end/custom-icon'. There is no need to include domain name.