import React from 'react';
import ProTypes from 'prop-types';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { SvgIcon } from '../Icon';

require('./styles/Collapse.default.less');

@observer
export default class Collapse extends React.Component {
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
		this.open = (!this.open);
	};

	render() {
		const {
			title,
			content,

			...other
		} = this.props;

		const rootClassName = this.open ?
			'ow-collapse ow-collapse-open'
			: 'ow-collapse ow-collapse-close';

		return (
			<div className={rootClassName}>
				{
					this.open ?
					<div className="ow-collapse-content-open">
						<div className="ow-collapse-content-title">
							{title}
						</div>
						<div className="ow-collapse-content-main">
							{content}
						</div>
					</div>
					:
					<div className="ow-collapse-content-close">
						{title}
					</div>
				}
				<SvgIcon
					onClick={this.handleOpen}
					name='chevronRight'
					color='rgba(204, 204, 204, 0.5)'
					className={this.open ? 'ow-collapse-icon-opened': ''}
				/>
			</div>
		);
	}
}
