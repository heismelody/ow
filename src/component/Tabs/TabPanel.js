import React from 'react';
import ProTypes from 'prop-types';

require('./styles/Tabs.default.less');

export default class TabPanel extends React.Component {
	static propTypes = {
		title: ProTypes.node.isRequired,
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
			<div
				{...other}
				className='ow-tabs'
			>
				{children}
			</div>
		);
	}
}
