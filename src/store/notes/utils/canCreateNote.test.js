import {
	canCreateNote,
	minTitleLength,
	maxTitleLength,
	maxListLength,
} from './canCreateNote'

describe('canCreateNote', () => {
	it('Allows creating of note with a unique title', () => {
		expect(canCreateNote([], 'testTitle')).toBe(true)
	})
	it('Cannot add a title that is too short', () => {
		const tooShortTitle = 'x'.repeat(minTitleLength - 1)

		expect(canCreateNote([], tooShortTitle)).toBe(false)
	})
	it('Cannot add a title that is too long', () => {
		const tooLongTitle = 'x'.repeat(maxTitleLength + 1)

		expect(canCreateNote([], tooLongTitle)).toBe(false)
	})

	it('Cannot add too many tabs', () => {
		const stateWithMaxLength = new Array(maxListLength).fill('filledTitle')

		const titleWithAcceptableLength = 'x'.repeat(minTitleLength)

		expect(
			canCreateNote(stateWithMaxLength, titleWithAcceptableLength)
		).toBe(false)
	})
})
