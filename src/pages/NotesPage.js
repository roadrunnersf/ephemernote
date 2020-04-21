import React, { useCallback, useMemo, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TitleTabs, AddNoteInput, ActionButtons } from 'components/notes'
import { TextArea } from 'elements/TextArea'
import { PageContainer, ContentContainer, ContentBox } from 'elements/shared'

import {
	updateCurrentNoteText,
	updateCurrentNoteID,
	createNewNote,
	setAddNoteInputValue,
} from 'store/notes'
import { cycleThemeColor } from 'store/app'

import { findNoteWithID } from 'utils'

export const NotesPage = () => {
	const textAreaRef = useRef()

	const dispatch = useDispatch()

	const notes = useSelector(state => state.notes.data)

	const currentNoteID = useSelector(state => state.notes.currentNoteID)
	const addNoteInputValue = useSelector(
		state => state.notes.addNoteInputValue
	)

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
		[dispatch]
	)

	const dispatchCreateNewNote = useCallback(() => {
		dispatch(createNewNote())
		textAreaRef.current.focus()
	}, [dispatch])

	const dispatchSetAddNoteInputValue = useCallback(
		event => {
			dispatch(setAddNoteInputValue(event.target.value))
		},
		[dispatch]
	)

	const dispatchTextAreaChange = useCallback(
		event => {
			dispatch(updateCurrentNoteText(event.target.value))
		},
		[dispatch]
	)

	const dispatchCycleThemeColor = useCallback(() => {
		dispatch(cycleThemeColor())
	}, [dispatch])

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
					/>
				</ContentBox>
				<ContentBox>
					<TextArea
						value={currentNote.text}
						onChange={dispatchTextAreaChange}
						fontFamily={currentNote.fontFamily}
						ref={textAreaRef}
					/>
				</ContentBox>
				<ContentBox justifyContent="space-between">
					<div>
						<AddNoteInput
							addNoteInputValue={addNoteInputValue}
							dispatchSetAddNoteInputValue={
								dispatchSetAddNoteInputValue
							}
							dispatchCreateNewNote={dispatchCreateNewNote}
						/>
					</div>
					<div>
						{/* <div
							style={{
								width: 50,
								height: 50,
								backgroundColor: 'red',
							}}
						/> */}
						<ActionButtons
							dispatchCycleThemeColor={dispatchCycleThemeColor}
						/>
					</div>
				</ContentBox>
			</ContentContainer>
		</PageContainer>
	)
}
