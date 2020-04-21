import React, { memo } from 'react'
import PropTypes from 'prop-types'

import orderBy from 'lodash/orderBy'

import { TabButton } from 'elements/shared'

export const TitleTabs = memo(
	({ titleTabsData, currentNoteID, dispatchUpdateCurrentNoteID }) => {
		const sortedtitleTabsData = orderBy(titleTabsData, 'sortIndex', 'asc')

		return (
			<>
				{sortedtitleTabsData.map(({ id, title }) => (
					<TabButton
						onClick={() => dispatchUpdateCurrentNoteID(id)}
						key={id}
						active={id === currentNoteID}
						rounding="top"
					>
						{title}
					</TabButton>
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
