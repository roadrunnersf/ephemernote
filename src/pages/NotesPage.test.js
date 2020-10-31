import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import NotesPage from './NotesPage'

import { createConfiguredStore } from 'store'
import notesInitialState from 'store/notes/initialState'

import { themeColorSchemes } from 'theme'
import { findNoteWithID } from 'utils'
import {
	ADD_NOTE,
	DELETE_CURRENT_NOTE,
	CHANGE_CURRENT_NOTE_FONT,
	CHANGE_THEME,
} from 'components/notes/ActionButtons'
import { updateCurrentNoteText } from 'store/notes'

const theme = themeColorSchemes.mint

const { getByText, getByTitle, getByLabelText, queryByText } = screen

const renderNotesPage = () => {
	const store = createConfiguredStore()

	render(
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<NotesPage />
			</ThemeProvider>
		</Provider>
	)
	return { store }
}

describe('NotesPage', () => {
	it('displays all of the tab titles', () => {
		renderNotesPage()

		notesInitialState.data.forEach(note => {
			expect(getByText(note.title)).toBeInTheDocument()
		})
	})

	it('displays the correct text', () => {
		renderNotesPage()

		const { currentNoteID } = notesInitialState

		const currentNote = findNoteWithID(
			notesInitialState.data,
			currentNoteID
		)

		expect(
			getByText(currentNote.text.substring(0, 10), {
				exact: false,
			})
		).toBeInTheDocument()
	})
	it('displays the correct action buttons', () => {
		renderNotesPage()
		;[
			ADD_NOTE,
			DELETE_CURRENT_NOTE,
			CHANGE_CURRENT_NOTE_FONT,
			CHANGE_THEME,
		].forEach(buttonText => {
			expect(getByTitle(buttonText)).toBeInTheDocument()
		})
	})

	describe('Integration', () => {
		it('Typing in the TextArea changes the content', () => {
			const { store } = renderNotesPage()

			const existingText = 'existing text'
			const typedText = 'testing testing testing'

			store.dispatch(updateCurrentNoteText(existingText))

			userEvent.type(getByLabelText('current note'), typedText)

			expect(getByLabelText('current note')).toHaveValue(
				`${existingText}${typedText}`
			)
		})
		it('clicking a tab shows the note for that tab', () => {
			renderNotesPage()

			const inactiveNoteData = notesInitialState.data[1]

			const titleOfTabToClick = inactiveNoteData.title

			expect(
				queryByText(inactiveNoteData.text.substring(0, 10), {
					exact: false,
				})
			).not.toBeInTheDocument()

			userEvent.click(getByText(titleOfTabToClick))

			expect(
				getByText(inactiveNoteData.text.substring(0, 10), {
					exact: false,
				})
			).toBeInTheDocument()
		})
		it('It is possible to delete a tab', () => {
			renderNotesPage()

			notesInitialState.data.forEach(note => {
				expect(getByText(note.title)).toBeInTheDocument()
			})

			const { currentNoteID } = notesInitialState

			const currentNote = findNoteWithID(
				notesInitialState.data,
				currentNoteID
			)

			userEvent.click(getByTitle(DELETE_CURRENT_NOTE))

			expect(queryByText(currentNote.title)).not.toBeInTheDocument()
		})
	})
})
