import React from 'react';
import ProTypes from 'prop-types';

require('./styles/Tabs.default.less');

export default class TabContent extends React.Component {
	static propTypes = {
	};

	static defaultProps = {
	};

	render() {
		const {
			children,
			active,

			...other
		} = this.props;

		const tabContent = children.map((child) =>
			React.cloneElement(child, {
				'aria-hidden' : (child.key != active)
			})
		);
		return (
			<div
				{...other}
				className='ow-tab-body'
			>
				{tabContent}
			</div>
		);
	}
}
