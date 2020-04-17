import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from 'store'
import { mintTheme } from 'theme'

import { NotesPage } from 'pages/NotesPage'
import { GlobalStyle } from 'elements/shared'

import 'App.css'

export const App = () => {
	return (
		<>
			<Provider store={store}>
				<ThemeProvider theme={mintTheme}>
					<GlobalStyle />
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
				</ThemeProvider>
			</Provider>
		</>
	)
}
