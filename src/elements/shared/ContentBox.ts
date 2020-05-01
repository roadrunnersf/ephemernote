import styled, { css } from 'styled-components'

type ContentBoxProps = {
	justifyContent:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
		| 'start'
		| 'end'
		| 'left'
		| 'right'
	flexWrap: boolean
}

const ContentBox = styled.div<ContentBoxProps>`
	display: flex;
	align-items: center;
	width: 100%;

	${({ justifyContent, flexWrap }) => css`
		justify-content: ${justifyContent || 'flex-start'};
		flex-wrap: ${flexWrap ? 'wrap' : 'nowrap'};
	`}
`

export default ContentBox
