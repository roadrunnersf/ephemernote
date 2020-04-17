export const findNewNoteID = notesData => {
	const notesLength = notesData.length ?? 0

	for (let i = 0; i < notesLength; i++) {
		if (i !== notesData[i].id) {
			return i
		}
	}
	return notesLength
}
