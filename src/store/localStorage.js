export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state')
		if (serializedState === null) {
			return undefined
		}
		return JSON.parse(serializedState)
	} catch (err) {
		console.warn('There was an error loading state!!!')
		return undefined
	}
}

export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state', serializedState)
	} catch (err) {
		console.warn('There was an error saving state!!!')
	}
}
