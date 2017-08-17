import React from 'react';
import ProTypes from 'prop-types';

import { SvgIcon } from '../Icon';

require('./styles/Select.default.less');

export default class SelectedValue extends React.Component {
	static propTypes = {
		value: ProTypes.array.isRequired,
	};

	static defaultProps = {
	};

	renderItems() {
		return this.props.value.map( (item, index) => {
			return (
				<p key={index}>
					{item.label}
					<SvgIcon name='close'
					         color='#b6b6b6'
					         size='sm'
					/>
				</p>
			);
		});
	}

	renderClearIcon() {
		return (
			<SvgIcon
				name='close'
				color='#b6b6b6'
			  size='sm'
			/>
		)
	}

	render() {
		const {
			selectedInput,
			value,

			...other
		} = this.props;

		return (
			<div
				className='ow-select-values'
				{...other}
			>
				{
					this.renderItems()
				}
				<input
					type='text'
					ref={selectedInput}
				/>
				{
					this.renderClearIcon()
				}
			</div>
		);
	}
}
