import {
	MIN_TITLE_LENGTH,
	MAX_TITLE_LENGTH,
	MAX_NUMBER_OF_NOTES,
} from 'globalConstants'

export const canCreateNote = (notesData, newTitle) => {
	const titleList = notesData.map(note => note.title)

	const correctLength = () =>
		newTitle.length >= MIN_TITLE_LENGTH &&
		newTitle.length <= MAX_TITLE_LENGTH
	const notTooManyNotes = () => titleList.length < MAX_NUMBER_OF_NOTES
	const newTitleDoesNotExist = () =>
		!titleList.some(title => title === newTitle)

	return correctLength() && notTooManyNotes() && newTitleDoesNotExist()
}
