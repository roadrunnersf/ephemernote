import React from 'react'
import { Provider } from 'react-redux'

import store from 'store'
import App from './App'

const Root = () => (
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)

export default Root
