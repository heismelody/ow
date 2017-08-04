import React from 'react';
import ProTypes from 'prop-types';

require('./styles/Button.default.less');

export default class IconButton extends React.Component {
	static propTypes = {
		disabled: ProTypes.bool,
		type: ProTypes.oneOf([
			'button',
			'submit',
			'reset',
		]),
		mode: ProTypes.oneOf([
			'primary',
			'color'
		]),
		clickhandler: ProTypes.func,
		size: ProTypes.oneOf([
			'default',
			'sm',
			'lg',
		]),
	};

	static defaultProps = {
		disabled: false,
		type: 'button',
		mode: 'primary',
		clickhandler: () => {},
		size: 'default'
	};

	constructor() {
		super();
	}

	render() {
		const {
			disabled,
			type,
			mode,
			size,

			...other
		} = this.props;


		return (
			<button
				className="ow-button"
				{...other}
				disabled={disabled}
				type={type}
			>
			</button>
		);
	}
}
