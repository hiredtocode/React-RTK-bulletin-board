import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
	{
		id: '1',
		title: 'Learning Redux Toolkit',
		content: "I've heard good things.",
	},
	{
		id: '2',
		title: 'Slices...',
		content: 'The more I say slice, the more I want pizza',
	},
]

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: {
			reducer(state, action) {
				state.push(action.payload) // this doesn't mutate the array since RTK uses emmerJS
			},
			prepare(title, content) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
					},
				}
			},
		},
	},
})

export const selectAllPosts = state => state.posts

export const { addPost } = postsSlice.actions

export default postsSlice.reducer
