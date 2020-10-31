export type Note = {
	id: number
	title: string
	text: string
	fontFamily: string | null
	sortIndex: number
}

export type NotesData = Note[]

export type NotesState = {
	currentNoteID: number
	data: NotesData
	showAddNoteInput: boolean
	addNoteInputValue: string
}
