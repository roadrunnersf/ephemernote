import { findNewNoteID } from './findNewNoteID'

const createMockStateFromArray = idArray => idArray.map(id => ({ id }))

describe('findNewNoteID', () => {
	it('Returns 0 when given an empty array', () => {
		expect(findNewNoteID({ data: [] })).toBe(0)
	})

	it('Returns the next ID when a list of IDs are present', () => {
		expect(findNewNoteID(createMockStateFromArray([0]))).toBe(1)
		expect(findNewNoteID(createMockStateFromArray([0, 1, 2, 3]))).toBe(4)
	})

	it('Returns the missing ID when a sequential ID is missing', () => {
		expect(findNewNoteID(createMockStateFromArray([1, 2]))).toBe(0)
		expect(findNewNoteID(createMockStateFromArray([0, 2]))).toBe(1)
	})
})
