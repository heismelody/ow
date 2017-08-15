import React from 'react';
import ProTypes from 'prop-types';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { SvgIcon } from '../Icon';

require('./styles/Select.default.less');

@observer
export default class Select extends React.Component {
	@observable open = false;

	static propTypes = {
	};

	static defaultProps = {
	};

	handleToggleList = e => {
		e.stopPropagation();
		this.open = (!this.open);
	};

	handleSelectClick = e => {
		this.open = (!this.open);
		this.refs.selectInput.focus();
	};

	render() {
		const {

			...other
		} = this.props;

		return (
			<div
				{...other}
				className={['ow-select',this.open && 'ow-select-open'].filter(e => !!e).join(' ')}
			  onClick={this.handleSelectClick}
			>
				<div
					className="ow-select-body"
				>
					<input
						type='text'
						ref='selectInput'
					/>

					<SvgIcon
						onClick={this.handleToggleList}
						name='chevronRight'
						color='rgba(204, 204, 204, 0.5)'
						className={this.open ? 'ow-collapse-icon-opened': ''}
					/>
				</div>  

				{
					<ul className="ow-select-list">
						<li>EN</li>
						<li>ZH</li>
						<li>EU</li>

						<li>EN</li>
						<li>ZH</li>
						<li>EU</li>
						<li>EN</li>
						<li>ZH</li>
						<li>EU</li>
						<li>EN</li>
						<li>ZH</li>
						<li>EU</li>
						<li>EN</li>
						<li>ZH</li>
						<li>EU</li>
						<li>EN</li>
						<li>ZH</li>
						<li>EU</li>
						<li>ZH</li>
						<li>EU</li>

						<li>EN</li>
						<li>ZH</li>
						<li>EU</li>
						<li>EN</li>
						<li>ZH</li>
						<li>EU</li>
						<li>EN</li>
						<li>ZH</li>
						<li>EU</li>
						<li>EN</li>
						<li>ZH</li>
						<li>EU</li>
						<li>EN</li>
						<li>ZH</li>
						<li>EU</li>
						<li>EN</li>
						<li>ZH</li>
						<li>EU</li>

					</ul>
				}


			</div>
		);
	}
}
