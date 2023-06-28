/* 📖 CRUD operations about post meta data in MongoDB. 
We save meta data about a post because there are many of them and it's difficult to navigate to a 
post via UI:
	- title
	- authors
	- keywords
	- description
	- url
The meta data make posts easily accessible and searchable.
*/

import express from 'express';
const router = express.Router();
import { Post } from '../models/post.models.mjs';

// test api 
router.get('/test', (req, res) => {
	res.status(200).send('Hello, API is working!');
});

// return all posts
router.get('/allPosts', async (req, res) => {
	const data = await Post.find({}).catch( err => console.log('Error occured while querying posts:' , err) );
	res.status(200).json(data);
});

// add a new post 
router.post('/', async (req, res) => {
	const data = await Post.create(req.body).catch( err => console.log('Error occured while saving a post: ', err) );	
	res.status(200).json(data);
});

// return a post by ID
router.get('/:id', async (req, res) => {
	const data = await Post.findByIdAndUpdate(req.params.id, req.body).catch( err => console.log('Error occured while loading a post by ID: ', err) );
	res.status(200).json(data);
});

// update an existing post
router.put('/:id', async (req, res) => {
	const data = await Post.findByIdAndUpdate(req.params.id, req.body).catch( err => console.log('Error occured while updaing a post by ID: ', err) );
	res.status(200).json(data);
});

// delete an existing post
router.delete('/:id', async (req, res) => {
	const data = await Post.findByIdAndRemove(req.params.id, req.body).catch( err => console.log('Error occured while deleting a post by ID: ', err) );
	res.status(200).json(data);
});

export { router }

