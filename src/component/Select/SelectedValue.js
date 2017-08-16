import React from 'react';
import ProTypes from 'prop-types';

import { SvgIcon } from '../Icon';

require('./styles/Select.default.less');

export default class SelectedValue extends React.Component {
	static propTypes = {
	};

	static defaultProps = {
	};

	render() {
		const {
			selectedInput,

			...other
		} = this.props;

		return (
			<div
				{...other}
			>
				<input
					type='text'
					ref={selectedInput}
				/>
			</div>
		);
	}
}
