import React, { memo } from 'react'
import orderBy from 'lodash/orderBy'

import { TabButton } from 'elements/TextArea'

export const TitleTabs = memo(
	({ titleTabData, currentNoteID, dispatchUpdateCurrentNoteID }) => {
		const sortedTitleTabData = orderBy(titleTabData, 'sortIndex', 'asc')

		return (
			<>
				{sortedTitleTabData.map(({ id, title }) => (
					<TabButton
						onClick={() => dispatchUpdateCurrentNoteID(id)}
						key={id}
						active={id === currentNoteID}
					>
						{title}
					</TabButton>
				))}
			</>
		)
	}
)
