import React from 'react';
import ProTypes from 'prop-types';

import TabPanel from './TabPanel';

require('./styles/Tabs.default.less');

export default class Tabs extends React.Component {
	static propTypes = {
		children: function (props, propName, componentName) {
			const prop = props[propName];

			React.Children.forEach(prop, function (child) {
				if (child.type.displayName !== 'TabPanel') {
					throw new Error('`' + componentName + '` children should be of type `TabPanel`.');
				}
			});
		}
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

	render() {
		const {
			children,

			...other
		} = this.props;

		return (
			<div {...other} className='ow-tabs'>
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
