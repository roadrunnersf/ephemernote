export const minTitleLength = 1
export const maxTitleLength = 15

export const maxListLength = 5

export const canCreateTab = (notesData, newTitle) => {
	const titleList = notesData.map(note => note.title)

	const correctLength = () =>
		newTitle.length >= minTitleLength && newTitle.length <= maxTitleLength
	const notTooManyTabs = () => titleList.length < maxListLength
	const newTitleDoesNotExist = () =>
		!titleList.some(title => title === newTitle)

	return correctLength() && notTooManyTabs() && newTitleDoesNotExist()
}
