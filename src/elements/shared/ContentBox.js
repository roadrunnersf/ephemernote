import styled, { css } from 'styled-components'

const ContentBox = styled.div`
	display: flex;
	align-items: center;
	width: 100%;

	${({ justifyContent, flexWrap }) => css`
		justify-content: ${justifyContent || 'flex-start'};
		flex-wrap: ${flexWrap ? 'wrap' : 'nowrap'};
	`}
`

export default ContentBox
