export const initialState = {
	currentNoteID: 0,
	data: [
		{
			id: 0,
			title: 'HelloWorld',
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet aliquam erat, vitae porta ex. Maecenas semper dapibus lacus non elementum. Nunc pulvinar auctor ornare. Pellentesque tempus condimentum ligula, vel sollicitudin risus aliquet et. Ut sit amet diam in tortor dignissim lacinia. Duis luctus ligula et eleifend posuere. Praesent hendrerit, tortor condimentum vehicula auctor, magna nisl pellentesque purus, eget imperdiet mi sapien vel tortor. Nulla laoreet maximus fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nulla nisi, ullamcorper a quam in, facilisis dapibus sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur in laoreet turpis, vel facilisis ante.',
			fontFamily: null,
			sortIndex: 0,
		},
		{
			id: 1,
			title: 'tab2',
			text:
				"export const TitleTabs = memo(\n\t({ titleTabData, currentNoteID, dispatchUpdateCurrentNoteID }) => {\n\t\tconst sortedTitleTabData = orderBy(titleTabData, 'sortIndex', 'asc')\n\n\t\treturn (\n\t\t\t<>\n\t\t\t\t{sortedTitleTabData.map(({ id, title }) => (\n\t\t\t\t\t<TabButton\n\t\t\t\t\t\tonClick={() => dispatchUpdateCurrentNoteID(id)}\n\t\t\t\t\t\tkey={id}\n\t\t\t\t\t\tactive={id === currentNoteID}\n\t\t\t\t\t>\n\t\t\t\t\t\t{title}\n\t\t\t\t\t</TabButton>\n\t\t\t\t))}\n\t\t\t</>\n\t\t)\n\t}\n)",
			fontFamily: 'Monospace',
			sortIndex: 1,
		},
	],
	addNoteInputValue: '',
}
