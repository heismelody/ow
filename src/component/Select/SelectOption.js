import React from 'react';
import ProTypes from 'prop-types';

import { SvgIcon } from '../Icon';

export default class SelectOption extends React.Component {
	static propTypes = {
		option: ProTypes.object.isRequired,   //Option Item
		index: ProTypes.number,               //Option Index
		actived: ProTypes.bool,                //Is option actived
		disable: ProTypes.bool,                 //Is option disabled
		customize: ProTypes.bool,               //Is option customized

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

	renderCustomizeOption = (option, className, children) => {
		const optionClassName = [className, `${className}-${option.key}`, 'ow-select-option'].join(' ');

		return (
			<div className={optionClassName}
			     role='option'
			     onMouseDown={this.handleMouseDown}
			>
				{children}
			</div>
		)
	};

	renderCusDisableOption = (option, className, children) => {
		const optionClassName = [className, `${className}-${option.key}`, 'ow-select-option'].join(' ');

		return (
			<div className={optionClassName}
			     role='option'
			     onMouseDown={this.handleMouseDown}
			>
				{children}
			</div>
		)
	}

	renderCusActiveOption = (option, className, children) => {
		const optionClassName = [className, `${className}-${option.key}`, 'ow-select-option'].join(' ');

		return (
			<div className={optionClassName}
			     role='option'
			     onMouseDown={this.handleMouseDown}
			>
				{children}
			</div>
		)
	}

	render () {
		const {
			option,
			className,
			actived,
			disable,
			children,
			customize,

			...props
		} = this.props;

		//@TODO: cutomize is under deploy, dont use this prop.
		if (customize && disable) {
			return this.renderCusDisableOption(option, className, children);
		} else if (customize && actived) {
			return this.renderCusActiveOption(option, className, children);
		} else if (customize) {
			return this.renderCustomizeOption(option, className, children);
		} else if (disable) {
			return this.renderDisabledOption();
		} else if (actived) {
			return this.renderActiveOption();
		} else {
			return this.renderDefaultOption();
		}
	}
}
