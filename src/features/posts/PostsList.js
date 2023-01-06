import { useSelector } from 'react-redux'
import { Section } from '../../styles/global.styled'
import PostAuthor from './PostAuthor'
import { selectAllPosts } from './postsSlice'
import TimeAgo from './TimeAgo'

const PostsList = () => {
	const posts = useSelector(selectAllPosts)

	const renderedPosts = posts.map(post => (
		<article key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content.substring(0, 100)}</p>
			<p className='postCredit'>
				<PostAuthor userId={post.userId} />
				<TimeAgo timestamp={post.date} />
			</p>
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
