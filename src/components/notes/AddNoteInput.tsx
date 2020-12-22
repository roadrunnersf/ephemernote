import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Input, Button } from 'elements/shared'
import {
	createNewNote,
	setAddNoteInputValue,
	closeAddNoteInput,
} from 'store/notes'

import styled, { css } from 'styled-components'
import { layout } from 'theme'
import { MAX_TITLE_LENGTH } from 'globalConstants'

type Props = {
	textAreaRef: React.RefObject<HTMLTextAreaElement>
	addNoteInputRef: React.RefObject<HTMLInputElement>
}

const AddNoteInput: React.FC<Props> = ({ textAreaRef, addNoteInputRef }) => {
	const dispatch = useDispatch()

	const showAddNoteInput = useSelector(
		(state: State) => state.notes.showAddNoteInput
	)
	const addNoteInputValue = useSelector(
		(state: State) => state.notes.addNoteInputValue
	)

	const dispatchCreateNewNote = () => {
		dispatch(createNewNote())

		textAreaRef?.current?.focus()
	}
	const dispatchCloseAddNoteInput = () => {
		dispatch(closeAddNoteInput())
	}

	const dispatchSetAddNoteInputValue = (event: React.SyntheticEvent) => {
		const { value } = event.target as HTMLTextAreaElement

		if (value.length <= MAX_TITLE_LENGTH) {
			dispatch(setAddNoteInputValue(value))
		} else if (value.length > addNoteInputValue.length + 1) {
			// if copy and pasting then truncate the pasted string
			const newValue = value.slice(0, MAX_TITLE_LENGTH)
			dispatch(setAddNoteInputValue(newValue))
		}
	}

	const hasContent = !!addNoteInputValue

	const enterKeyCreateNewNote = (event: React.KeyboardEvent) => {
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
				onBlur={dispatchCloseAddNoteInput}
				placeholder="Enter new note name..."
				borderRadius="bottom"
				autoComplete="off"
				ref={addNoteInputRef}
			/>
			<Button
				show={hasContent && showAddNoteInput}
				onMouseDown={dispatchCreateNewNote}
				borderRadius="bottom"
				variant="tertiary"
				style={{ marginRight: 8 }}
			>
				Add
			</Button>
		</CustomBox>
	)
}

type CustomBoxProps = {
	show: boolean
}

const CustomBox = styled.div<CustomBoxProps>`
	display: flex;
	min-width: 200px;
	max-width: 300px;
	flex: 1;
	margin-bottom: ${layout.unit}px;
	margin-right: auto;

	${p => css`
		${!p.show &&
		css`
			min-width: 0px;
			max-width: 0px;
		`}
	`}
`

export default memo(AddNoteInput)
