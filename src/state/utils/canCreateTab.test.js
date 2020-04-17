import {
	canCreateTab,
	minTitleLength,
	maxTitleLength,
	maxListLength,
} from './canCreateTab'

describe('canCreateTab', () => {
	it('Allows creating of tab with a unique title', () => {
		expect(canCreateTab([], 'testTitle')).toBe(true)
	})
	it('Cannot add a title that is too short', () => {
		const tooShortTitle = 'x'.repeat(minTitleLength - 1)

		expect(canCreateTab([], tooShortTitle)).toBe(false)
	})
	it('Cannot add a title that is too long', () => {
		const tooLongTitle = 'x'.repeat(maxTitleLength + 1)

		expect(canCreateTab([], tooLongTitle)).toBe(false)
	})

	it('Cannot add too many tabs', () => {
		const stateWithMaxLength = new Array(maxListLength).fill('filledTitle')

		const titleWithAcceptableLength = 'x'.repeat(minTitleLength)

		expect(
			canCreateTab(stateWithMaxLength, titleWithAcceptableLength)
		).toBe(false)
	})
})
