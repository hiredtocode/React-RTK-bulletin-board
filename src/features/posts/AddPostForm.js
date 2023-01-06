import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Section } from '../../styles/global.styled'
import { postAdded } from './postsSlice'

const AddPostForm = () => {
	const dispatch = useDispatch()

	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	const onTitleChanged = e => setTitle(e.target.value)
	const onContentChanged = e => setContent(e.target.value)

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(
				postAdded({
					id: nanoid(),
					title,
					content,
				})
			)
		}
	}

	return (
		<Section>
			<h2>Add a New Post</h2>
			<form>
				<label htmlFor='postTitle'>Post Title:</label>
				<input
					type='text'
					id='postTitle'
					name='postTitle'
					value={title}
					onChange={onTitleChanged}
				/>
				<label htmlFor='postContent'>Content:</label>
				<textarea
					name='postContent'
					id='postContent'
					cols='30'
					rows='10'
					value={content}
					onChange={onContentChanged}
				></textarea>
				<button type='button' onClick={onSavePostClicked}>
					Save Post
				</button>
			</form>
		</Section>
	)
}
export default AddPostForm
