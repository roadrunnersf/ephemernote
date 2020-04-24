import React from 'react'
import { mount } from 'enzyme'

import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from 'store'
import NotesPage from './NotesPage'
import { themeColorSchemes } from 'theme'
import notesInitialState from 'store/notes/initialState'

import { NoteTitleTab } from 'elements/shared'

const notesInitialStateData = notesInitialState.data
const theme = themeColorSchemes.mint

const findTextArea = wrapper =>
	wrapper.find('[data-testid="NotesPage>TextArea"]').hostNodes()
const findTitleTabs = wrapper =>
	wrapper.find('[data-testid="NotesPage>TitleTabs"]')
const findActionButtons = wrapper =>
	wrapper.find('[data-testid="NotesPage>ActionButtons"]')

const findNoteTitleTabs = wrapper => wrapper.find(NoteTitleTab)

describe('NotesPage', () => {
	let wrapper

	beforeEach(() => {
		wrapper = mount(
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<NotesPage />
				</ThemeProvider>
			</Provider>
		)
	})

	describe('Components and props', () => {
		it('renders a TextArea, TitleTabs and ActionButtons components', () => {
			expect(findTextArea(wrapper).length).toBe(1)
			expect(findTitleTabs(wrapper).length).toBe(1)
			expect(findActionButtons(wrapper).length).toBe(1)
		})

		it('renders the correct number of TitleTabs based on the initial state', () => {
			expect(findNoteTitleTabs(wrapper).length).toBe(
				notesInitialStateData.length
			)
		})

		it('renders one tab as active', () => {
			const numberOfActiveTabs = findNoteTitleTabs(wrapper).filterWhere(
				node => node.props().active === true
			).length

			expect(numberOfActiveTabs).toBe(1)
		})

		it('renders the rest of the tabs as inactive', () => {
			const numberOfInactiveTabs = findNoteTitleTabs(wrapper).filterWhere(
				node => node.props().active === false
			).length

			const totalNumberOfTabs = findNoteTitleTabs(wrapper).length

			expect(numberOfInactiveTabs).toBe(totalNumberOfTabs - 1)
		})
	})

	describe('Integration', () => {
		it('Editing the TextArea changes the content', () => {
			const testString = 'testing testing testing'

			findTextArea(wrapper).simulate('change', {
				target: {
					value: testString,
				},
			})

			expect(findTextArea(wrapper).props().value).toBe(testString)
		})

		it('Clicking the inactive tabs sets them to active', () => {
			findNoteTitleTabs(wrapper).forEach((node, i) => {
				if (node.props().active === false) {
					node.simulate('click')
					expect(
						findNoteTitleTabs(wrapper).at(i).props().active
					).toBe(true)
				}
			})
		})
	})
})
