import { createSlice } from '@reduxjs/toolkit'
import { calculateNextColor } from 'store/app/utils'
import { AppState } from './index.d'

export const initialState: AppState = {
	themeColor: 'seascape',
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		cycleThemeColor(state) {
			state.themeColor = calculateNextColor(state.themeColor)
		},
	},
})

const { cycleThemeColor } = appSlice.actions

export { cycleThemeColor }

export default appSlice
