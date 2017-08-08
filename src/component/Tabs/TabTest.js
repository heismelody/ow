import React from 'react';
import ProTypes from 'prop-types';

require('./styles/Tabs.default.less');

import Tabs from './Tabs';
import TabPanel from './TabPanel';

export default class TabTest extends React.Component {
	static propTypes = {
	};

	static defaultProps = {
		size: 'md',
		color: '#FFF'
	};

	render() {
		const {
			children,

			...other
		} = this.props;

		return (
			<Tabs>
				<TabPanel title='tab 1' key={1}>first</TabPanel>
				<TabPanel title='tab 2' key={2}>second</TabPanel>
				<TabPanel title='tab 3' key={3}>third</TabPanel>
				<TabPanel title='tab 4' key={4}>four</TabPanel>
			</Tabs>
		);
	}
}
