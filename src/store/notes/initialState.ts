import { NotesState } from 'store/notes/index.d'

const initialState: NotesState = {
	currentNoteID: 0,
	data: [
		{
			id: 0,
			title: 'ephemernote',
			text:
				'Welcome to ephemernote.\n\nYour notes are saved in local storage, so they will still be here if you close the tab/browser and come back later.\n\nActions:\nPlus - add new tab\nBin - delete current note\nLetter - switch current note font\nPalette - cycle the theme\n\nCurrently the maximum number of notes is 5, until I can add some kind of carousel!',
			fontFamily: null,
			sortIndex: 0,
		},
		{
			id: 1,
			title: 'Code',
			text:
				"let someArray = []\n\nsomeArray = [...someArray, 'Hello world!']\n\nconsole.log(someArray)",
			fontFamily: 'Monospace',
			sortIndex: 1,
		},
	],
	showAddNoteInput: false,
	addNoteInputValue: '',
}

export default initialState
