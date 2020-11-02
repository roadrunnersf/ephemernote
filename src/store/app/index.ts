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

export const { cycleThemeColor } = appSlice.actions

export default appSlice
