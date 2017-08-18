import React from 'react';
import ProTypes from 'prop-types';

require('./styles/Popover.default.less');

export default class Popover extends React.Component {

	static propTypes = {
	};

	render() {
		const {

			...other
		} = this.props;

		return (
			<div>
				<input
					type="checkbox"
				/>
			</div>
		);
	}
}
