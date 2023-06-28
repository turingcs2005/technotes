import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
	title: String,
	authors: [String],
	keywords: [String],
	description: String,
	url: String
});

const Post = mongoose.model('Post', postSchema);

export {Post}