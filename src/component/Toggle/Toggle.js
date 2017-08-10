import React from 'react';
import ProTypes from 'prop-types';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

require('./styles/Toggle.default.less');

@observer
export default class Switch extends React.Component {
	@observable check = false;

	static propTypes = {
		defaultToggled: ProTypes.bool,
		disabled: ProTypes.bool,
		toggled: ProTypes.bool,
		onToggle: ProTypes.func,
	};

	constructor(props) {
		super();

		this.check = props.defaultToggled;
	}
	handleToggle = e => {
		this.check = (!this.check);
	};

	render() {
		const {
			children,
			defaultToggled,
			toggled,

			...other
		} = this.props;

		return (
			<div
				{...other}
				className='ow-toggle'>
				<input
					onClick={this.handleToggle}
					className={this.check ? 'ow-toggle-off' : 'ow-toggle-on'}
					type="checkbox"
					checked={this.check}
				/>
			</div>
		);
	}
}
