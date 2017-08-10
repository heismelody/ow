import React from 'react';
import ProTypes from 'prop-types';

require('./styles/TabPanel.default.less');

export default class Dropdown extends React.Component {
	static propTypes = {
		title: ProTypes.node.isRequired,
	};

	render() {
		const { children, ...other } = this.props;

		return (
			<div {...other} className='ow-panel'>
				{children}
			</div>
		);
	}
}
