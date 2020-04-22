export const findNewNoteID = notesData => {
	if (notesData.length === 0) {
		return 0
	}

	const idList = notesData.map(({ id }) => id)

	return Math.max(...idList) + 1
}
