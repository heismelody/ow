import React from 'react';
import ProTypes from 'prop-types';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

require('./styles/Fold.default.less');

@observer
export default class Fold extends React.Component {
	@observable open = false;

	static propTypes = {
		style: ProTypes.object,
		title: ProTypes.string,
		titleElement: ProTypes.node,
		titleStyle: ProTypes.object,
		body: ProTypes.node,
		bodyStyle: ProTypes.object,
		iconElement: ProTypes.node,
		iconStyle: ProTypes.object,
	};

	static defaultProps = {
	};

	constructor() {
		super();
	}

	render() {
		const {
			disabled,

			...other
		} = this.props;

		return (
			<div className="ow-fold">
				We recommend that you get to know React before diving i ？

				{
					open ?
					<div className="ow-fold-open"></div>
					:
					<div className="ow-fold-close"></div>
				}
			</div>
		);
	}
}
