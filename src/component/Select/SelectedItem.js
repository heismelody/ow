import React from 'react';
import ProTypes from 'prop-types';

import { SvgIcon } from '../Icon';

require('./styles/Select.default.less');

export default class SelectedItem extends React.Component {
	static propTypes = {
		// value: ProTypes.array.isRequired,
	};

	static defaultProps = {
	};

	removeValue = e => {
		this.props.onRemoveValue(e, this.props.value);
	};

	render() {
		const {
			value,

			...other
		} = this.props;

		return (
			<span
				className='ow-select-values-item'
			>
				<span className='ow-item-label'>{value.label}</span>
				<SvgIcon
					onClick={this.removeValue}
					name='close'
          color='#b6b6b6'
          size='sm'
				/>
			</span>
		);
	}
}
