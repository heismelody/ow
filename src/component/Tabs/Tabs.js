import React from 'react';
import ProTypes from 'prop-types';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import TabPanel from './TabPanel';
import TabBar from './TabBar';

require('./styles/Tabs.default.less');

@observer
export default class Tabs extends React.Component {
	static propTypes = {
		children: function (props, propName, componentName) {
			const prop = props[propName];

			React.Children.forEach(prop, function (child) {
				if (child.type.displayName !== 'TabPanel') {
					throw new Error('`' + componentName + '` children should be of type `TabPanel`.');
				}
			});
		},
	};

	static defaultProps = {
		size: 'md',
		color: '#FFF'
	};

	getTabs() {
		const tabs = [];

		React.Children.forEach(this.props.children, child => {
			tabs.push(child);
		});

		return tabs;
	}

	getTabBarItems() {
		const tabBarItems = {};

		React.Children.forEach(this.props.children, child => {
			tabBarItems[child.key] = child.props.title;
		});

		return tabBarItems;
	}

	getActiveKey() {

	}

	getDisabledKey() {

	}

	onActiveTabChange = e => {

	}

	render() {
		const {
			children,

			...other
		} = this.props;

		// const tabBarItems = {};

		return (
			<div {...other} className='ow-tabs'>
				<TabBar
					active={1}
					disabled={[1,2]}
				  items={this.getTabBarItems()}
				/>

				{/*<div>*/}
					{/*{tabBars}*/}
				{/*</div>*/}
				{/*<div>*/}
					{/*{tabContents}*/}
				{/*</div>*/}
			</div>
		);
	}
}
