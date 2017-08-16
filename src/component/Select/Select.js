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

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	handleClickOutside = e => {
		if (this.refs.owSelect && !this.refs.owSelect.contains(e.target)) {
			this.open = false;
		}
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
			  ref='owSelect'
			>
				<div
					className="ow-select-body"
				>
					<input
						type='text'
						ref='selectInput'
					/>

					<SvgIcon
						size='sm'
						onClick={this.handleToggleList}
						name='chevronRight'
						color='#b6b6b6'
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
