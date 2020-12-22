import React, { useCallback, useMemo, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TitleTabs, AddNoteInput, ActionButtons } from 'components/notes'
import TextArea from 'elements/TextArea'
import { PageContainer, ContentContainer, ContentBox } from 'elements/shared'

import { updateCurrentNoteText, updateCurrentNoteID } from 'store/notes'

import { findNoteWithID } from 'utils'

const NotesPage = () => {
	const textAreaRef = useRef()
	const addNoteInputRef = useRef()

	const dispatch = useDispatch()

	const notes = useSelector(state => state.notes.data)
	const roundBottomLeftCorner = !useSelector(
		state => state.notes.showAddNoteInput
	)

	const currentNoteID = useSelector(state => state.notes.currentNoteID)

	const currentNote = findNoteWithID(notes, currentNoteID)

	const titleTabsData = useMemo(
		() =>
			notes.map(({ title, id, sortIndex }) => ({
				title,
				id,
				sortIndex,
			})),
		[notes]
	)
	const dispatchUpdateCurrentNoteID = useCallback(
		id => {
			dispatch(updateCurrentNoteID(id))
			textAreaRef.current.focus()
		},
		[dispatch, textAreaRef]
	)

	const dispatchTextAreaChange = useCallback(
		event => {
			dispatch(updateCurrentNoteText(event.target.value))
		},
		[dispatch]
	)

	return (
		<PageContainer>
			<ContentContainer>
				<ContentBox>
					<TitleTabs
						titleTabsData={titleTabsData}
						currentNoteID={currentNoteID}
						dispatchUpdateCurrentNoteID={
							dispatchUpdateCurrentNoteID
						}
						data-testid="NotesPage>TitleTabs"
					/>
				</ContentBox>
				<ContentBox>
					<TextArea
						value={currentNote.text}
						onChange={dispatchTextAreaChange}
						fontFamily={currentNote.fontFamily}
						roundBottomLeftCorner={roundBottomLeftCorner}
						ref={textAreaRef}
						aria-label="current note"
						data-testid="NotesPage>TextArea"
					/>
				</ContentBox>
				<ContentBox justifyContent="center" flexWrap>
					<AddNoteInput
						textAreaRef={textAreaRef}
						addNoteInputRef={addNoteInputRef}
					/>
					<ActionButtons
						addNoteInputRef={addNoteInputRef}
						data-testid="NotesPage>ActionButtons"
					/>
				</ContentBox>
			</ContentContainer>
		</PageContainer>
	)
}

export default NotesPage
