import React from 'react';
import ProTypes from 'prop-types';

require('./styles/Tabs.default.less');

export default class TabContent extends React.Component {
	static propTypes = {
	};

	static defaultProps = {
		size: 'md',
		color: '#FFF'
	};


	render() {
		const {
			children,
			active,

			...other
		} = this.props;

		const tabContent = children.map((child) => {
			if(child.key == active) {
				return child;
			}
		});
		return (
			<div
				{...other}
			>
				{tabContent}
			</div>
		);
	}
}
