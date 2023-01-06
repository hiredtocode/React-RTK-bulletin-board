import AddPostForm from './features/posts/AddPostForm'
import PostsList from './features/posts/PostsList'
import { Main } from './styles/global.styled'
function App() {
	return (
		<Main>
			<AddPostForm />
			<PostsList />
		</Main>
	)
}

export default App
