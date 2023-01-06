import { useSelector } from 'react-redux'
import { Section } from '../../styles/global.styled'
import { selectAllPosts } from './postsSlice'

const PostsList = () => {
	const posts = useSelector(selectAllPosts)

	const renderedPosts = posts.map(post => (
		<article key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content.substring(0, 100)}</p>
		</article>
	))

	return (
		<Section>
			<h2>Posts</h2>
			{renderedPosts}
		</Section>
	)
}
export default PostsList
