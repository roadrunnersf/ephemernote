import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { Input } from 'elements/shared'

export const AddTab = memo(
	({ addTabValue, dispatchSetAddTabValue, dispatchCreateNewTab }) => {
		const hasContent = !!addTabValue

		return (
			<>
				<Input
					type="text"
					name="newTabName"
					value={addTabValue}
					onChange={dispatchSetAddTabValue}
					placeholder="Enter new tab name..."
					borderRadius="bottom"
					hasContent={hasContent}
				/>
				{hasContent && (
					<button type="button" onClick={dispatchCreateNewTab}>
						Add Tab
					</button>
				)}
			</>
		)
	}
)

AddTab.propTypes = {
	addTabValue: PropTypes.string.isRequired,
	dispatchSetAddTabValue: PropTypes.func.isRequired,
	dispatchCreateNewTab: PropTypes.func.isRequired,
}
