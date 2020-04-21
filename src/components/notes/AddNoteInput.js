import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { Input, Button } from 'elements/shared'

export const AddNoteInput = memo(
	({
		addNoteInputValue,
		dispatchSetAddNoteInputValue,
		dispatchCreateNewNote,
	}) => {
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
					type="text"
					name="newTabName"
					value={addNoteInputValue}
					onChange={dispatchSetAddNoteInputValue}
					onKeyDown={enterKeyCreateNewNote}
					placeholder="Enter new note name..."
					borderRadius="bottom"
				/>
				{hasContent && (
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
	}
)

AddNoteInput.propTypes = {
	addNoteInputValue: PropTypes.string.isRequired,
	dispatchSetAddNoteInputValue: PropTypes.func.isRequired,
	dispatchCreateNewNote: PropTypes.func.isRequired,
}
