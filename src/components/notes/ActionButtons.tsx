import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { FlexBox, withStyledIcon } from 'elements/shared'

import Plus from 'mdi-react/PlusIcon'
import TrashCanOutline from 'mdi-react/TrashCanOutlineIcon'
import FormatFont from 'mdi-react/FormatFontIcon'
import Palette from 'mdi-react/PaletteIcon'

import {
	toggleShowAddNoteInput,
	deleteCurrentNote,
	cycleCurrentNoteFontFamily,
} from 'store/notes'
import { cycleThemeColor } from 'store/app'

export const ADD_NOTE = 'Add note'
export const DELETE_CURRENT_NOTE = 'Delete current note'
export const CHANGE_CURRENT_NOTE_FONT = 'Change current note font'
export const CHANGE_THEME = 'Change theme'

const StyledPlus = withStyledIcon(Plus)
const StyledDelete = withStyledIcon(TrashCanOutline)
const StyledFont = withStyledIcon(FormatFont)
const StyledColor = withStyledIcon(Palette)

const ActionButtons: React.FC = ({ addNoteInputRef }: TSFixMe) => {
	const dispatch = useDispatch()

	return (
		<FlexBox>
			<StyledPlus
				title={ADD_NOTE}
				onClick={() => {
					dispatch(toggleShowAddNoteInput())
					addNoteInputRef.current.focus()
				}}
			/>
			<StyledDelete
				title={DELETE_CURRENT_NOTE}
				onClick={() => {
					dispatch(deleteCurrentNote())
				}}
			/>
			<StyledFont
				title={CHANGE_CURRENT_NOTE_FONT}
				onClick={() => {
					dispatch(cycleThemeColor())
				}}
			/>
			<StyledColor
				title={CHANGE_THEME}
				onClick={() => {
					dispatch(cycleCurrentNoteFontFamily())
				}}
			/>
		</FlexBox>
	)
}

export default memo(ActionButtons)
