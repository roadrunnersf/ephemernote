import { findNewNoteID } from './findNewNoteID'

const createMockNotesDataFromArray = (idArray: number[]) =>
	idArray.map((id, index) => ({
		id,
		title: 'a title',
		text: 'some text',
		fontFamily: null,
		sortIndex: index,
	}))

describe('findNewNoteID', () => {
	it('Returns 0 when given an empty array', () => {
		expect(findNewNoteID([])).toBe(0)
	})

	it('Returns the next ID when a list of IDs are present', () => {
		expect(findNewNoteID(createMockNotesDataFromArray([0]))).toBe(1)
		expect(findNewNoteID(createMockNotesDataFromArray([0, 1, 2, 3]))).toBe(
			4
		)
	})

	it('Returns high ID when a sequential ID is missing', () => {
		expect(findNewNoteID(createMockNotesDataFromArray([1, 2]))).toBe(3)
		expect(findNewNoteID(createMockNotesDataFromArray([0, 2, 3]))).toBe(4)
	})
})
