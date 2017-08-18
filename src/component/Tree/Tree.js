import React from 'react';
import ProTypes from 'prop-types';

require('./styles/Tree.default.less');

export default class Tree extends React.Component {

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
