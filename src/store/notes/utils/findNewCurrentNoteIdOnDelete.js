export const findNewCurrentNoteIdOnDelete = (
	notesArray,
	indexOfCurrentNote
) => {
	const notesArrayLength = notesArray.length

	if (indexOfCurrentNote === notesArrayLength - 1) {
		return notesArray[indexOfCurrentNote - 1].id
	}

	return notesArray[indexOfCurrentNote + 1].id
}
