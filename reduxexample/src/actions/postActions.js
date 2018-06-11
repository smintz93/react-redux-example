import { FETCH_POSTS, NEW_POST } from './types';

// es6 
export const fetchPosts = () => dispatch => {
	// middleware (thunk) allows us to use dispitch
	
		//dispatch data to reducer
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(posts => dispatch({
			type: FETCH_POSTS,
			payload: posts
		}));

}

export const createPost = postData => dispatch => {
	console.log('action called');
	fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(postData)
		})
		.then(res => res.json())
		.then(post => 
			dispatch({
				type: NEW_POST,
				payload: post
		}));


}