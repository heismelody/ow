import React from 'react';
import ProTypes from 'prop-types';

import { SvgIcon } from '../Icon';

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
	};

	renderDefaultOption = () => {
		const enableOptClassName = [this.props.className, 'ow-select-option'].join(' ');

		return (
			<div className={enableOptClassName}
			     style={this.props.option.style}
			     role='option'
			     onMouseDown={this.handleMouseDown}
			>
				{this.props.option.label}
				<SvgIcon name='check' size='sm'/>
			</div>
		);
	};

	renderActiveOption = () => {
		const enableOptClassName = [this.props.className, 'ow-select-option', 'active'].join(' ');

		return(
			<div className={enableOptClassName}
			            style={this.props.option.style}
			            role='option'
			            onMouseDown={this.handleMouseDown}
			>
				{this.props.option.label}
				<SvgIcon name='check' size='sm'/>
			</div>
		);
	};

	renderDisabledOption = () => {
		const disabledOptClassName = [this.props.className, 'ow-select-option', 'disabled'].join(' ');

		return (
			<div className={disabledOptClassName}
			    role='option'
			>
			{this.props.option.label}
			</div>
		);
	};

	render () {
		const {
			option,
			className,

			...props
		} = this.props;

		return option.disabled ?
			this.renderDisabledOption() :
			(option.active ?
				this.renderActiveOption() : this.renderDefaultOption()
			);
	}
}
