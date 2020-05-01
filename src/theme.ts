type ThemeColorScheme = {
	primary: string
	secondary: string
	text: string
	background: string
	tertiary: string
}

type ThemeColorSchemes = {
	[colorSchemeName: string]: ThemeColorScheme
}

export const themeColorSchemes: ThemeColorSchemes = {
	mint: {
		primary: 'rgb(176,216,197)',
		secondary: 'rgb(218,235,219)',
		text: 'rgb(255,255,255)',
		background: 'rgb(236,238,237)',
		tertiary: 'rgb(188,187,187)',
	},
	seascape: {
		primary: 'rgb(43,93,104)',
		secondary: 'rgb(125,187,185)',
		text: 'rgb(242,242,242)',
		background: 'rgb(216,211,208)',
		tertiary: 'rgb(157,168,168)',
	},
	moroccan: {
		primary: 'rgb(167,70,45)',
		secondary: 'rgb(208,115,71)',
		text: 'rgb(231,196,168)',
		background: 'rgb(236,238,237)',
		tertiary: 'rgb(80,41,32)',
	},
	vscode: {
		primary: 'rgb(30,30,30)',
		secondary: 'rgb(101,141,210)',
		text: 'rgb(224,213,193)',
		background: 'rgb(242,242,242)',
		tertiary: 'rgb(101,185,169)',
	},
	monochrome: {
		primary: 'rgb(63,63,63)',
		secondary: 'rgb(168,168,168)',
		text: 'rgb(242,242,242)',
		background: 'rgb(211,211,211)',
		tertiary: 'rgb(3,3,3)',
	},
}

export const layout = {
	unit: 8,
	borderRadiusPx: '10px',
	transitionTime: '250ms',
}
