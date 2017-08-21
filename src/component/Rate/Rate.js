import React from 'react';
import ProTypes from 'prop-types';

require('./styles/Rate.default.less');

export default class Rate extends React.Component {

	static propTypes = {
		count: ProTypes.number,
		value: ProTypes.number,
		defaultNumber : ProTypes.number,
		disabled: ProTypes.bool,
		rateElement: ProTypes.node,
		className: ProTypes.node,
		children: ProTypes.node,
	};

	renderAllRateItem() {
		let ele = [];

		for (let i = 0; i <= this.props.count; i++) {
			ele.push(<div>

			</div>);
		}

		return ele;
	}

	render() {
		const {
			count,

			...other
		} = this.props;

		return (
			<div>
				{ this.renderAllRateItem() }
			</div>
		);
	}
}
