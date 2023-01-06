import styled from 'styled-components/macro'

export const Section = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	max-width: 500px;

	article {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		border: 1px solid black;
		margin: 5px;
		padding: 15px;
		border-radius: 5px;
	}

	form {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		input {
			width: 100%;
		}
	}
`
export const Main = styled.main`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 100%;
	align-content: center;
	justify-content: center;
`
