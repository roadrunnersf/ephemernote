import React, { useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TitleTabs, AddTab } from 'components/notes'
import { TextArea } from 'elements/TextArea'
import { PageContainer, ContentContainer, ContentBox } from 'elements/shared'

import {
	updateCurrentNoteText,
	updateCurrentNoteID,
	createNewTab,
	setAddTabValue,
} from 'store/notes'

import { findNoteWithID } from 'utils'

export const NotesPage = () => {
	const dispatch = useDispatch()

	const notes = useSelector(state => state.notes.data)
	const currentNoteID = useSelector(state => state.notes.currentNoteID)
	const addTabValue = useSelector(state => state.notes.addTabValue)

	const currentNote = findNoteWithID(notes, currentNoteID)

	const titleTabData = useMemo(
		() =>
			notes.map(({ title, id, sortIndex }) => ({
				title,
				id,
				sortIndex,
			})),
		[notes]
	)

	const dispatchUpdateCurrentNoteID = useCallback(
		id => dispatch(updateCurrentNoteID(id)),
		[dispatch]
	)

	const dispatchCreateNewTab = useCallback(() => {
		dispatch(createNewTab())
	}, [dispatch])

	const dispatchSetAddTabValue = useCallback(
		event => {
			dispatch(setAddTabValue(event.target.value))
		},
		[dispatch]
	)
	const dispatchTextAreaChange = event => {
		dispatch(updateCurrentNoteText(event.target.value))
	}

	return (
		<PageContainer>
			<ContentContainer>
				<ContentBox>
					<TitleTabs
						titleTabData={titleTabData}
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
					/>
				</ContentBox>
				<ContentBox>
					<AddTab
						addTabValue={addTabValue}
						dispatchSetAddTabValue={dispatchSetAddTabValue}
						dispatchCreateNewTab={dispatchCreateNewTab}
					/>
				</ContentBox>
			</ContentContainer>
		</PageContainer>
	)
}
