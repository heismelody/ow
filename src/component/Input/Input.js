import React from 'react';
import ProTypes from 'prop-types';

require('./styles/Input.default.less');

export default class Input extends React.Component {
	static propTypes = {
	};

	static defaultProps = {
	};


	render() {
		const {


			...other
		} = this.props;

		return (
			<div
				{...other}
				className='ow-input'
			>
			</div>
		);
	}
}
