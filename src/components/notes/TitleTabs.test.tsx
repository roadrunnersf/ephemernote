import React from 'react'
import { ReactWrapper } from 'enzyme'

import { mount } from 'enzyme'
import TitleTabs from './TitleTabs'

const spyDispatchUpdateCurrentNoteID = jest.fn().mockName('mockedDispatch')

const mockProps = {
	titleTabsData: [
		{ title: 'Tab1', id: 1, sortIndex: 1 },
		{ title: 'Tab2', id: 2, sortIndex: 2 },
		{ title: 'Tab3', id: 3, sortIndex: 3 },
	],
	currentNoteID: 1,
	dispatchUpdateCurrentNoteID: spyDispatchUpdateCurrentNoteID,
}

const { titleTabsData } = mockProps

const findNoteTitleTab = (wrapper: ReactWrapper) =>
	wrapper.find('[data-testid="TitleTabs>NoteTitleTab"]').hostNodes()

describe('TitleTabs', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	const wrapper = mount(<TitleTabs {...mockProps} />)
	it('Displays the correct number of tabs based on the data passed as props', () => {
		expect(findNoteTitleTab(wrapper).length).toBe(
			mockProps.titleTabsData.length
		)
	})

	describe('onClick', () => {
		it('does not call dispatch function when clicking on the active tab', () => {
			const positionToClick = 0

			findNoteTitleTab(wrapper).at(positionToClick).simulate('click')

			expect(spyDispatchUpdateCurrentNoteID).toHaveBeenCalledTimes(0)
		})

		it('calls dispatch function when clicking on a not active tab', () => {
			const positionToClick = 1

			expect(spyDispatchUpdateCurrentNoteID).toHaveBeenCalledTimes(0)

			findNoteTitleTab(wrapper).at(positionToClick).simulate('click')

			expect(spyDispatchUpdateCurrentNoteID).toHaveBeenCalledWith(
				titleTabsData[positionToClick].id
			)
			expect(spyDispatchUpdateCurrentNoteID).toHaveBeenCalledTimes(1)
		})
	})
})
