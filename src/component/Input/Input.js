import React from 'react';
import ProTypes from 'prop-types';

import {SvgIcon} from '../Icon';

require('./styles/Input.default.less');

export default class Input extends React.Component {
	static propTypes = {
		type: ProTypes.string,
		elementLeft: ProTypes.node,
		elementRight: ProTypes.node,
		iconLeft: ProTypes.node,
		iconRight: ProTypes.node,
		placeholder: ProTypes.string,
		errorText: ProTypes.string,
		errorStyle: ProTypes.object,
	};

	static defaultProps = {
		type: 'default',
	};

	render() {
		const {
			elementLeft,
			elementRight,
			iconLeft,
			iconRight,
			iconColor,
			placeholder,
			errorText,

			...other
		} = this.props;

		const bodyClassName = ['ow-input', (iconLeft || iconRight) && 'ow-input-group'].join(' ');

		return (
			<div
				{...other}
				className={bodyClassName}
			>
				{
					iconLeft
						&&
					<SvgIcon color={iconColor || '#ccc'} size='sm' name={iconLeft} className='ow-input-dec ow-input-left-dec'/>
				}

				<input className='ow-input-main' type="text" placeholder={placeholder}/>

				{
					errorText
					&&
					<p className='ow-input-error'>{errorText}</p>
				}
				{
					iconRight
						&&
					<SvgIcon color={iconColor || '#ccc'} size='sm' name={iconRight} className='ow-input-dec ow-input-right-dec'/>
				}
			</div>
		);
	}
}
