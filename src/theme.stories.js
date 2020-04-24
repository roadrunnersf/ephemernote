import React from 'react'

import { themeColorSchemes as theme } from 'theme'

const font = {
	fontFamily: '"Courier New", Courier, monospace',
}

const ColoredBox = ({ children, backGroundColor }) => (
	<div
		style={{
			backgroundColor: backGroundColor,
			display: 'flex',
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			width: 200,
			height: 200,
		}}
	>
		{children}
	</div>
)

export default { title: 'Theme' }

export const themeColorSchemes = () => (
	<div style={{ display: 'block' }}>
		{Object.keys(theme).map(colorScheme => (
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					paddingBottom: 10,
					borderBottom: '1px solid black',
					marginBottom: 10,
				}}
			>
				<p style={{
					...font, width: '100%'
				}}>{colorScheme}</p>
				{Object.keys(theme[colorScheme]).map(color => {
					const colorRGB = theme[colorScheme][color]

					return (
						<ColoredBox backGroundColor={colorRGB}>
							<p key={colorRGB} style={{ ...font }}>
								{color}
							</p>
						</ColoredBox>
					)
				})}
				<br />
			</div>
		))}
	</div>
)
