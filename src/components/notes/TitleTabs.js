import React, { memo } from 'react'
import PropTypes from 'prop-types'

import orderBy from 'lodash/orderBy'

import { NoteTitleTab } from 'elements/shared'

export const TitleTabs = memo(
	({ titleTabsData, currentNoteID, dispatchUpdateCurrentNoteID }) => {
		const sortedtitleTabsData = orderBy(titleTabsData, 'sortIndex', 'asc')

		return (
			<>
				{sortedtitleTabsData.map(({ id, title }) => {
					const active = id === currentNoteID

					return (
						<NoteTitleTab
							onClick={() =>
								active || dispatchUpdateCurrentNoteID(id)
							}
							key={id}
							active={active}
							rounding="top"
							data-testid="TitleTabs>NoteTitleTab"
						>
							{title}
						</NoteTitleTab>
					)
				})}
			</>
		)
	}
)

TitleTabs.propTypes = {
	titleTabsData: PropTypes.array.isRequired,
	currentNoteID: PropTypes.number.isRequired,
	dispatchUpdateCurrentNoteID: PropTypes.func.isRequired,
}
