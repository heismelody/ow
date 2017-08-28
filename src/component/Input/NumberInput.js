import React from 'react';
import ProTypes from 'prop-types';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

require('./styles/NumberInput.default.less');

@observer
export default class NumberInput extends React.Component {
	@observable number = 0;
	static propTypes = {
		value: ProTypes.number,
		max: ProTypes.number,
		min: ProTypes.number,
	};

	static defaultProps = {
		type: 'default',
	};

	constructor(props) {
		super(props);

		this.number = props.value;
	}

	handleIncrease = e => {
		if (this.props.onHandleIncrease) {
			this.props.onHandleIncrease(e, this.number);
		}
		if (this.number < this.props.max ) {
			this.number = this.number + 1;
		}
	};

	handleDecrease = e => {
		if (this.props.onHandleDecreas) {
			this.props.onHandleDecreas(e, this.number);
		}
		if (this.number > this.props.min ) {
			this.number = this.number - 1;
		}
	};

	renderOperator = () => {
		return (
			<div className="ow-number-input-op">
					<span className="ow-number-input-op-up" onClick={this.handleIncrease}>
						<span className="ow-number-input-op-up-content">+</span>
					</span>
					<span className="ow-number-input-op-down" onClick={this.handleDecrease}>
						<span className="ow-number-input-op-up-content">-</span>
					</span>
			</div>
		);
	};

	render() {
		const {

			...other
		} = this.props;

		return (
			<div
				{...other}
				className='ow-number-input'
			>
				{this.renderOperator()}
				<div style={{overflow: 'hidden'}}>
					<input value={this.number} className='ow-number-input-main' type="text"/>
				</div>
			</div>
		);
	}
}