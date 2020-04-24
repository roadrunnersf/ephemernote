import styled from 'styled-components'

const ContentBox = styled.div`
	display: flex;
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};

	flex-direction: row;
	align-items: center;
	width: 100%;
`

export default ContentBox
