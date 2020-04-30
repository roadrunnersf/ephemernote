// actions

export const CYCLE_THEME_COLOR = 'Cycle theme color'

// types

export type CycleThemeColorAction = {
	type: typeof CYCLE_THEME_COLOR
}

export type AppActionTypes = CycleThemeColorAction // | SomethingAction

export type AppState = {
	themeColor: string
}
