import React, { memo } from 'react'

import Plus from 'mdi-react/PlusIcon'
import TrashCanOutline from 'mdi-react/TrashCanOutlineIcon'
import Palette from 'mdi-react/PaletteIcon'
import FormatFont from 'mdi-react/FormatFontIcon'

import { Icon, FlexBox } from 'elements/shared'

export const ADD_NOTE = 'Add note'
export const DELETE_CURRENT_NOTE = 'Delete current note'
export const CHANGE_CURRENT_NOTE_FONT = 'Change current note font'
export const CHANGE_THEME = 'Change theme'

const ActionButtons = ({
	dispatchCycleThemeColor,
	dispatchToggleShowAddNoteInput,
	dispatchDeleteCurrentNote,
	dispatchCycleCurrentNoteFontFamily,
}) => {
	const actionButtons = [
		{
			title: ADD_NOTE,
			component: Plus,
			onClick: dispatchToggleShowAddNoteInput,
		},
		{
			title: DELETE_CURRENT_NOTE,
			component: TrashCanOutline,
			onClick: dispatchDeleteCurrentNote,
		},
		{
			title: CHANGE_CURRENT_NOTE_FONT,
			component: FormatFont,
			onClick: dispatchCycleCurrentNoteFontFamily,
		},
		{
			title: CHANGE_THEME,
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
