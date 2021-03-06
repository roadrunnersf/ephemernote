import React, { memo } from 'react'
import PropTypes from 'prop-types'

import orderBy from 'lodash/orderBy'

import { NoteTitleTab } from 'elements/shared'

type TitleTabObjProps = {
	title: string
	id: number
	sortIndex: number
}

type TitleTabsProps = {
	titleTabsData: Array<TitleTabObjProps>
	currentNoteID: number
	dispatchUpdateCurrentNoteID: Function
}

const TitleTabs = ({
	titleTabsData,
	currentNoteID,
	dispatchUpdateCurrentNoteID,
}: TitleTabsProps) => {
	const sortedtitleTabsData: Array<TitleTabObjProps> = orderBy(
		titleTabsData,
		'sortIndex',
		'asc'
	)

	return (
		<div role="tablist">
			{sortedtitleTabsData.map(({ id, title }) => {
				const active: boolean = id === currentNoteID

				return (
					<NoteTitleTab
						onClick={() =>
							active || dispatchUpdateCurrentNoteID(id)
						}
						key={id}
						active={active}
						rounding="top"
						role="tab"
						data-testid="TitleTabs>NoteTitleTab"
					>
						{title}
					</NoteTitleTab>
				)
			})}
		</div>
	)
}

TitleTabs.propTypes = {
	titleTabsData: PropTypes.array.isRequired,
	currentNoteID: PropTypes.number.isRequired,
	dispatchUpdateCurrentNoteID: PropTypes.func.isRequired,
}

export default memo(TitleTabs)
