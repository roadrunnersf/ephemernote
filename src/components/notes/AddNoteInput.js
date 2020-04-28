import React, { memo, forwardRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Input, Button } from 'elements/shared'
import { createNewNote, setAddNoteInputValue } from 'store/notes/actionCreators'

import styled, { css } from 'styled-components'
import { layout } from 'theme'
import { MAX_TITLE_LENGTH } from 'globalConstants'

const AddNoteInput = ({ textAreaRef }, ref) => {
	const dispatch = useDispatch()

	const showAddNoteInput = useSelector(state => state.notes.showAddNoteInput)
	const addNoteInputValue = useSelector(
		state => state.notes.addNoteInputValue
	)

	const dispatchCreateNewNote = () => {
		dispatch(createNewNote())
		textAreaRef.current.focus()
	}

	const dispatchSetAddNoteInputValue = event => {
		const { value } = event.target

		if (value.length <= MAX_TITLE_LENGTH) {
			dispatch(setAddNoteInputValue(value))
		} else if (value.length > addNoteInputValue.length + 1) {
			// if copy and pasting then truncate the pasted string
			const newValue = value.slice(0, MAX_TITLE_LENGTH)
			dispatch(setAddNoteInputValue(newValue))
		} else {
			return
		}
	}

	const hasContent = !!addNoteInputValue

	const enterKeyCreateNewNote = event => {
		if (event.key === 'Enter') {
			event.preventDefault()
			dispatchCreateNewNote()
		}
	}

	return (
		<CustomBox show={showAddNoteInput}>
			<Input
				show={showAddNoteInput}
				type="text"
				name="newTabName"
				value={addNoteInputValue}
				onChange={dispatchSetAddNoteInputValue}
				onKeyDown={enterKeyCreateNewNote}
				placeholder="Enter new note name..."
				borderRadius="bottom"
				autoComplete="off"
				ref={ref}
			/>
			<Button
				show={hasContent && showAddNoteInput}
				onClick={dispatchCreateNewNote}
				borderRadius="bottom"
				variant={'tertiary'}
				style={{ marginRight: 8 }}
			>
				Add
			</Button>
		</CustomBox>
	)
}

const CustomBox = styled.div`
	display: flex;
	min-width: 200px;
	max-width: 300px;
	flex: 1;
	margin-bottom: ${layout.unit}px;
	margin-right: auto;

	${({ show }) => css`
		${!show &&
		css`
			min-width: 0px;
			max-width: 0px;
		`}
	`}
`

export default memo(forwardRef(AddNoteInput))
