import React from 'react';
import ProTypes from 'prop-types';

export default class SelectOption extends React.Component {
	static propTypes = {
		option: ProTypes.object.isRequired,   //Option Item
		index: ProTypes.number,               //Option Index

		isDisabled: ProTypes.bool,
		isSelected: ProTypes.bool,
		onFocus: ProTypes.func,
		onSelect: ProTypes.func,
	};

	handleMouseDown = e => {
		e.stopPropagation();
		e.preventDefault();
		this.props.onSelect(this.props.option.value, event);
	};

	render () {
		const {
			option,
			className,

			...props
		} = this.props;

		const disabledOptClassName = [className, 'ow-select-option', 'disabled'].join(' ');
		const enableOptClassName = [className, 'ow-select-option'].join('');

		return option.disabled ? (
			<li className={disabledOptClassName}
			     role='option'
			>
				{option.label}
			</li>
		) : (
			<li className={enableOptClassName}
			     style={option.style}
			     role='option'
			     onMouseDown={this.handleMouseDown}
			>
				{option.label}
			</li>
		);
	}
}
