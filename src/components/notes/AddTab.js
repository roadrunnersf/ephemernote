import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { Input, Button } from 'elements/shared'

export const AddTab = memo(
	({ addTabValue, dispatchSetAddTabValue, dispatchCreateNewTab }) => {
		const hasContent = !!addTabValue

		const enterKeyCreateNewTab = event => {
			if (event.key === 'Enter') {
				event.preventDefault()
				dispatchCreateNewTab()
			}
		}

		return (
			<>
				<Input
					type="text"
					name="newTabName"
					value={addTabValue}
					onChange={dispatchSetAddTabValue}
					onKeyDown={enterKeyCreateNewTab}
					placeholder="Enter new tab name..."
					borderRadius="bottom"
				/>
				{hasContent && (
					<Button
						onClick={dispatchCreateNewTab}
						borderRadius="bottom"
						variant={'tertiary'}
					>
						Add Tab
					</Button>
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
