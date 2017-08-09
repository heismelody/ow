import React from 'react';
import ProTypes from 'prop-types';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { SvgIcon } from '../Icon';

require('./styles/Fold.default.less');

@observer
export default class Fold extends React.Component {
	@observable open = false;

	static propTypes = {
		style: ProTypes.object,
		title: ProTypes.string,
		titleElement: ProTypes.node,
		titleStyle: ProTypes.object,
		content: ProTypes.node,
		contentStyle: ProTypes.object,
		iconElement: ProTypes.node,
		iconStyle: ProTypes.object,
	};

	static defaultProps = {
	};

	handleOpen  = e => {
		console.warn(this.open);
		this.open = (!this.open);
	};

	render() {
		const {
			title,
			content,

			...other
		} = this.props;

		return (
			<div className="ow-fold">
				{
					this.open ?
					<div className="ow-fold-open">
						{content}
						<SvgIcon
							onClick={this.handleOpen}
							name='chevronRight'
							color='#fff'
							className={this.open ? 'opened': ''}
						/>
					</div>
					:
					<div className="ow-fold-close">
						{title}
						<SvgIcon
							onClick={this.handleOpen}
							name='chevronRight'
							color='#fff'
							className={this.open ? 'opened': ''}
						/>

						{content}
					</div>
				}
			</div>
		);
	}
}
