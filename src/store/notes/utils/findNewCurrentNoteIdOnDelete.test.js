import { findNewCurrentNoteIdOnDelete } from './findNewCurrentNoteIdOnDelete'

const notesMock = [{ id: 111 }, { id: 222 }, { id: 333 }]

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
