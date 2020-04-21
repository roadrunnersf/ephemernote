import React, { memo } from 'react'

import { mdiPlus, mdiTrashCanOutline, mdiPalette } from '@mdi/js'

import { Icon } from 'elements/shared'

export const ActionButtons = memo(({ dispatchCycleThemeColor }) => {
	const actionButtons = [
		{
			title: 'Add note',
			path: mdiPlus,
			onClick: dispatchCycleThemeColor,
		},
		{
			title: 'Delete current note',
			path: mdiTrashCanOutline,
			onClick: dispatchCycleThemeColor,
		},
		{
			title: 'Change theme',
			path: mdiPalette,
			onClick: dispatchCycleThemeColor,
		},
	]

	return (
		<>
			{actionButtons.map(({ title, path, onClick }) => (
				<Icon path={path} title={title} onClick={onClick} size={1.2} />
			))}
		</>
	)
})
