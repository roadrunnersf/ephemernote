import { calculateNextColor } from './calculateNextColor'

describe('calculateNextColor', () => {
	it('Calculates the correct next color', () => {
		expect(calculateNextColor('seascape')).toBe('monochrome')
		expect(calculateNextColor('mint')).toBe('seascape')
	})
})
