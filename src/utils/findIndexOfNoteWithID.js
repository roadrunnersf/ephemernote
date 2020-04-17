export const findIndexOfNoteWithID = (notesArray, idToFind) =>
	notesArray.findIndex(({ id }) => id === idToFind)
