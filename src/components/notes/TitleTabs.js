import React, { memo } from 'react'
import orderBy from 'lodash/orderBy'

export const TitleTabs = memo(
	({ titleTabData, dispatchUpdateCurrentNoteID }) => {
		const sortedTitleTabData = orderBy(titleTabData, 'sortIndex', 'asc')

		return (
			<>
				<p>this is the notes page</p>
				{sortedTitleTabData.map(({ id, title }) => (
					<button
						onClick={() => dispatchUpdateCurrentNoteID(id)}
						key={id}
					>
						{title}
					</button>
				))}
			</>
		)
	}
)
