import React, { memo } from 'react'
import PropTypes from 'prop-types'

export const AddTab = memo(
	({ addTabValue, dispatchSetAddTabValue, dispatchCreateNewTab }) => (
		<>
			<input
				type="text"
				name="newTabName"
				value={addTabValue}
				onChange={dispatchSetAddTabValue}
			/>
			<button type="button" onClick={dispatchCreateNewTab}>
				Add Tab
			</button>
		</>
	)
)

AddTab.propTypes = {
	addTabValue: PropTypes.string.isRequired,
	dispatchSetAddTabValue: PropTypes.func.isRequired,
	dispatchCreateNewTab: PropTypes.func.isRequired,
}
