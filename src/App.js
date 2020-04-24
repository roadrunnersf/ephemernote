import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import { themeColorSchemes } from 'theme'

import NotesPage from 'pages/NotesPage'
import { GlobalStyle } from 'elements/shared'

const App = () => {
	const storeThemeColor = useSelector(state => state.app.themeColor)

	const theme = themeColorSchemes[storeThemeColor]

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
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
		</>
	)
}

export default App
