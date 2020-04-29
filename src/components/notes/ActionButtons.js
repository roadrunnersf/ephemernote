import React, { memo } from 'react'

import Plus from 'mdi-react/PlusIcon'
import TrashCanOutline from 'mdi-react/TrashCanOutlineIcon'
import Palette from 'mdi-react/PaletteIcon'
import FormatFont from 'mdi-react/FormatFontIcon'

import { Icon, FlexBox } from 'elements/shared'

const ActionButtons = ({
	dispatchCycleThemeColor,
	dispatchToggleShowAddNoteInput,
	dispatchDeleteCurrentNote,
	dispatchCycleCurrentNoteFontFamily,
}) => {
	const actionButtons = [
		{
			title: 'Add note',
			component: Plus,
			onClick: dispatchToggleShowAddNoteInput,
		},
		{
			title: 'Delete current note',
			component: TrashCanOutline,
			onClick: dispatchDeleteCurrentNote,
		},
		{
			title: 'Change current note font',
			component: FormatFont,
			onClick: dispatchCycleCurrentNoteFontFamily,
		},
		{
			title: 'Change theme',
			component: Palette,
			onClick: dispatchCycleThemeColor,
		},
	]

	return (
		<FlexBox>
			{actionButtons.map(({ title, component, onClick }) => (
				<Icon
					as={component}
					title={title}
					onClick={onClick}
					size={24}
					key={title}
				/>
			))}
		</FlexBox>
	)
}

export default memo(ActionButtons)
