import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import App from 'App'
import store from 'store'

describe('App', () => {
	it('Renders with no errors', () => {
		mount(
			<Provider store={store}>
				<App />
			</Provider>
		)
	})
})
