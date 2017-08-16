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
		this.props.onSelect(this.props.option, event);
	}

	render () {
		const {
			option,
			className,

			...props
		} = this.props;

		const disabledOptClassName = [className, 'ow-select-option', 'ow-select-option-disabled'].join(' ');
		const enableOptClassName = [className, 'ow-select-option'].join('');

		return option.disabled ? (
			<div className={disabledOptClassName}
			     role='option'
			>
				{this.props.children}
			</div>
		) : (
			<div className={enableOptClassName}
			     style={option.style}
			     role='option'
			     onMouseDown={this.handleMouseDown}
			>
				{this.props.children}
			</div>
		);
	}
}
