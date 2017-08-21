import React from 'react';
import ProTypes from 'prop-types';

require('./styles/Input.default.less');

export default class Input extends React.Component {
	static propTypes = {
		type: ProTypes.string,
		elementLeft: ProTypes.node,
		elementRight: ProTypes.node,
		iconLeft: ProTypes.node,
		iconRight: ProTypes.node,
		placeholder: ProTypes.string
	};

	static defaultProps = {
		type: 'default',
	};

	render() {
		const {
			elementLeft,
			elementRight,
			placeholder,

			...other
		} = this.props;

		return (
			<div
				{...other}
				className='ow-input'
			>
				<span className='ow-input-dec ow-input-left-dec'>sdf</span>

				<input type="text" placeholder={placeholder}/>

				<span className='ow-input-dec ow-input-right-dec'>sdf</span>
			</div>
		);
	}
}
