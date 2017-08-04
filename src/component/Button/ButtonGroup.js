import React from 'react';
import ProTypes from 'prop-types';

export default class ButtonGroup extends React.Component {
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
		size: ProTypes.oneOf([
			'default',
			'sm',
			'lg',
		]),
		style: ProTypes.object,

		text: ProTypes.string,
		textPosition: ProTypes.oneOf([
			'before',
			'after',
		]),

		clickhandler: ProTypes.func,
	};

	static defaultProps = {
		disabled: false,
		type: 'button',
		mode: 'primary',
		size: 'default',
		textPosition: 'after'
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
			style,

			...other
		} = this.props;

		const className = 'ow-button';

		return (
			<button
				{...other}

				className={className}
				disabled={disabled}
				type={type}
			  style={style}
			>
			</button>
		);
	}
}
