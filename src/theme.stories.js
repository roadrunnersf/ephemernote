import React from 'react'

import { mintTheme } from 'theme'

const ColoredBox = ({ children, backGroundColor }) => (
	<div
		style={{
			backgroundColor: backGroundColor,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: 200,
			height: 200,
		}}
	>
		{children}
	</div>
)

export default { title: 'Mint Theme' }

export const colors = () => (
	<div style={{ display: 'flex' }}>
		{Object.keys(mintTheme).map(color => (
			<ColoredBox backGroundColor={mintTheme[color]}>
				<p
					key={color}
					style={{ fontFamily: '"Courier New", Courier, monospace' }}
				>
					{color}
				</p>
			</ColoredBox>
		))}
	</div>
)
