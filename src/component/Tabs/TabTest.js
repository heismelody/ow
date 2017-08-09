import React from 'react';
import ProTypes from 'prop-types';

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
			<div>
				<div className="test" style={{margin: '20px', display: 'inline-block'}}>
					<Tabs>
						<TabPanel title='TAB A' key={1}>TAB A</TabPanel>
						<TabPanel title='TAB B' key={2}>TAB B</TabPanel>
						<TabPanel title='TAB C' key={3}>TAB C</TabPanel>
						<TabPanel title='TAB D' key={4}>TAB D</TabPanel>
					</Tabs>
				</div>

				<div className="test" style={{margin: '20px', display: 'inline-block'}}>
					<Tabs position="left">
						<TabPanel title='TAB A' key={1}>TAB A</TabPanel>
						<TabPanel title='TAB B' key={2}>TAB B</TabPanel>
						<TabPanel title='TAB C' key={3}>TAB C</TabPanel>
						<TabPanel title='TAB D' key={4}>TAB D</TabPanel>
					</Tabs>
				</div>

				<div className="test" style={{margin: '20px', display: 'inline-block'}}>
					<Tabs position="right">
						<TabPanel title='TAB A' key={1}>TAB A</TabPanel>
						<TabPanel title='TAB B' key={2}>TAB B</TabPanel>
						<TabPanel title='TAB C' key={3}>TAB C</TabPanel>
						<TabPanel title='TAB D' key={4}>TAB D</TabPanel>
					</Tabs>
				</div>

				<div className="test" style={{margin: '20px', display: 'inline-block'}}>
					<Tabs position="bottom">
						<TabPanel title='TAB A' key={1}>TAB A</TabPanel>
						<TabPanel title='TAB B' key={2}>TAB B</TabPanel>
						<TabPanel title='TAB C' key={3}>TAB C</TabPanel>
						<TabPanel title='TAB D' key={4}>TAB D</TabPanel>
					</Tabs>
				</div>
			</div>
		);
	}
}
