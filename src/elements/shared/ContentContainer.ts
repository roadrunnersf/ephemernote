import styled from 'styled-components'
import { layout } from 'theme'

const { unit } = layout

const ContentContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 800px;
	min-width: 260px;
	margin: ${unit * 3}px;

	@media (min-width: 600px) {
		margin: ${unit * 5}px;
	}
`
export default ContentContainer
