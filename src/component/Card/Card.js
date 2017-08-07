import React from 'react';
import ProTypes from 'prop-types';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

require('./styles/Card.default.less');

@observer
export default class Card extends React.Component {
	@observable open = false;

	static propTypes = {
		style: ProTypes.object,
	};

	static defaultProps = {
	};

	render() {
		const {
			children,
			style,
			circle,

			...other
		} = this.props;

		return (
			<div
				{...other}
				className="ow-card"
			  style={style}
			>
				{children}
			</div>
		);
	}
}
