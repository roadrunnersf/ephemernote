import { findNewCurrentNoteIdOnDelete } from './findNewCurrentNoteIdOnDelete'

const createMockNotesDataFromArray = (idArray: number[]) =>
	idArray.map((id, index) => ({
		id,
		title: 'a title',
		text: 'some text',
		fontFamily: null,
		sortIndex: index,
	}))

const notesMock = createMockNotesDataFromArray([111, 222, 333])

describe('findNewCurrentNoteIdOnDelete', () => {
	describe('returns...', () => {
		it('the next note ID when the current note is not the last note', () => {
			expect(findNewCurrentNoteIdOnDelete(notesMock, 1)).toBe(333)
		})
		it('the previous note ID when the current note is  the last note', () => {
			expect(findNewCurrentNoteIdOnDelete(notesMock, 2)).toBe(222)
		})
	})
})
