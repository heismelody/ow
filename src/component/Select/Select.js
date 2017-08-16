import React from 'react';
import ProTypes from 'prop-types';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { SvgIcon } from '../Icon';
import SelectOption from './SelectOption';
import SelectedValue from './SelectedValue';

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
		this.selectedInput.focus();
	};

	renderOptions = () => {
		let options = [
			{
				value: 'sss',
				label: 'sss',
			},{
				value: 'aaa',
				label: 'sss',
			},{
				value: 'sss',
				label: 'bbb',
			},{
				value: 'ccc',
				label: 'ddd',
			},{
				value: 'eee',
				label: 'fff',
			},{
				value: 'fde',
				label: 'sdf',
				disabled: true
			}
		];

		return options.map( (option,i) => {
			return <SelectOption
				key={i}
				option={option}
			/>
		});
	}

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
					<SelectedValue
						selectedInput={el => this.selectedInput = el}
					/>

					<SvgIcon
						size='sm'
						onClick={this.handleToggleList}
						name='chevronRight'
						color='#b6b6b6'
						className={this.open ? 'ow-collapse-icon-opened': ''}
					/>
				</div>

				<ul className="ow-select-list">
					{
						this.renderOptions()
					}
				</ul>
			</div>
		);
	}
}
