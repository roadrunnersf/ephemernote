import React, { memo } from 'react'

import { mdiPlus, mdiTrashCanOutline, mdiPalette, mdiFormatFont } from '@mdi/js'

import { Icon } from 'elements/shared'

export const ActionButtons = memo(
	({
		dispatchCycleThemeColor,
		dispatchToggleShowAddNoteInput,
		dispatchDeleteCurrentNote,
		dispatchCycleCurrentNoteFontFamily,
	}) => {
		const actionButtons = [
			{
				title: 'Add note',
				path: mdiPlus,
				onClick: dispatchToggleShowAddNoteInput,
			},
			{
				title: 'Delete current note',
				path: mdiTrashCanOutline,
				onClick: dispatchDeleteCurrentNote,
			},
			{
				title: 'Change current note font',
				path: mdiFormatFont,
				onClick: dispatchCycleCurrentNoteFontFamily,
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
					<Icon
						path={path}
						title={title}
						onClick={onClick}
						size={1.2}
						key={title}
					/>
				))}
			</>
		)
	}
)
