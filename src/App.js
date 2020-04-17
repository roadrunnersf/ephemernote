import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'state/root'

import { NotesPage } from 'pages/NotesPage'

export const App = () => {
	return (
		<>
			<Provider store={store}>
				<h3>This is an app</h3>
				<Router>
					<Switch>
						<Route path="/">
							<NotesPage />
						</Route>
						<Route path="/notes">
							<NotesPage />
						</Route>
					</Switch>
				</Router>
			</Provider>
		</>
	)
}
