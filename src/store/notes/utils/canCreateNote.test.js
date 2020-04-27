import { canCreateNote } from './canCreateNote'

import {
	MIN_TITLE_LENGTH,
	MAX_TITLE_LENGTH,
	MAX_NUMBER_OF_NOTES,
} from 'globalConstants'

describe('canCreateNote', () => {
	it('Allows creating of note with a unique title', () => {
		expect(canCreateNote([], 'testTitle')).toBe(true)
	})
	it('Cannot add a title that is too short', () => {
		const tooShortTitle = 'x'.repeat(MIN_TITLE_LENGTH - 1)

		expect(canCreateNote([], tooShortTitle)).toBe(false)
	})
	it('Cannot add a title that is too long', () => {
		const tooLongTitle = 'x'.repeat(MAX_TITLE_LENGTH + 1)

		expect(canCreateNote([], tooLongTitle)).toBe(false)
	})

	it('Cannot add too many tabs', () => {
		const stateWithMaxLength = new Array(MAX_NUMBER_OF_NOTES).fill(
			'filledTitle'
		)

		const titleWithAcceptableLength = 'x'.repeat(MIN_TITLE_LENGTH)

		expect(
			canCreateNote(stateWithMaxLength, titleWithAcceptableLength)
		).toBe(false)
	})
})
