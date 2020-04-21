import React, { useCallback, useMemo, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TitleTabs, AddNoteInput, ActionButtons } from 'components/notes'
import { TextArea } from 'elements/TextArea'
import { PageContainer, ContentContainer, ContentBox } from 'elements/shared'

import {
	updateCurrentNoteText,
	updateCurrentNoteID,
	toggleShowAddNoteInput,
	deleteCurrentNote,
} from 'store/notes'
import { cycleThemeColor } from 'store/app'

import { findNoteWithID } from 'utils'

export const NotesPage = () => {
	const textAreaRef = useRef()
	const addNoteInputRef = useRef()

	const dispatch = useDispatch()

	const notes = useSelector(state => state.notes.data)

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
		[dispatch]
	)

	const dispatchTextAreaChange = useCallback(
		event => {
			dispatch(updateCurrentNoteText(event.target.value))
		},
		[dispatch]
	)

	const dispatchToggleShowAddNoteInput = useCallback(() => {
		dispatch(toggleShowAddNoteInput())
		addNoteInputRef.current.focus()
	}, [dispatch])
	const dispatchDeleteCurrentNote = useCallback(() => {
		dispatch(deleteCurrentNote())
	}, [dispatch])
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
							textAreaRef={textAreaRef}
							ref={addNoteInputRef}
						/>
					</div>
					<div>
						<ActionButtons
							dispatchDeleteCurrentNote={
								dispatchDeleteCurrentNote
							}
							dispatchToggleShowAddNoteInput={
								dispatchToggleShowAddNoteInput
							}
							dispatchCycleThemeColor={dispatchCycleThemeColor}
						/>
					</div>
				</ContentBox>
			</ContentContainer>
		</PageContainer>
	)
}
