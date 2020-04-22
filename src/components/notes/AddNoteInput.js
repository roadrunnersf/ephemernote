import React, { memo, useCallback, forwardRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Input, Button } from 'elements/shared'
import { createNewNote, setAddNoteInputValue } from 'store/notes'

export const AddNoteInput = memo(
	forwardRef(({ textAreaRef }, ref) => {
		const dispatch = useDispatch()

		const showAddNoteInput = useSelector(
			state => state.notes.showAddNoteInput
		)
		const addNoteInputValue = useSelector(
			state => state.notes.addNoteInputValue
		)

		const dispatchCreateNewNote = useCallback(() => {
			dispatch(createNewNote())
			textAreaRef.current.focus()
		}, [dispatch, textAreaRef])

		const dispatchSetAddNoteInputValue = useCallback(
			event => {
				dispatch(setAddNoteInputValue(event.target.value))
			},
			[dispatch]
		)

		const hasContent = !!addNoteInputValue

		const enterKeyCreateNewNote = event => {
			if (event.key === 'Enter') {
				event.preventDefault()
				dispatchCreateNewNote()
			}
		}

		return (
			<>
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
				{hasContent && showAddNoteInput && (
					<Button
						onClick={dispatchCreateNewNote}
						borderRadius="bottom"
						variant={'tertiary'}
					>
						Add Note
					</Button>
				)}
			</>
		)
	})
)
