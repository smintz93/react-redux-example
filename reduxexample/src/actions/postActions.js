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