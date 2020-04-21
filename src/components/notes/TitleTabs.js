import React, { memo } from 'react'
import PropTypes from 'prop-types'

import orderBy from 'lodash/orderBy'

import { NoteTitleTab, AddNoteTab } from 'elements/shared'

export const TitleTabs = memo(
	({ titleTabsData, currentNoteID, dispatchUpdateCurrentNoteID }) => {
		const sortedtitleTabsData = orderBy(titleTabsData, 'sortIndex', 'asc')

		return (
			<>
				{sortedtitleTabsData.map(({ id, title }) => (
					<NoteTitleTab
						onClick={() => dispatchUpdateCurrentNoteID(id)}
						key={id}
						active={id === currentNoteID}
						rounding="top"
					>
						{title}
					</NoteTitleTab>
				))}
			</>
		)
	}
)

TitleTabs.propTypes = {
	titleTabsData: PropTypes.array.isRequired,
	currentNoteID: PropTypes.number.isRequired,
	dispatchUpdateCurrentNoteID: PropTypes.func.isRequired,
}
