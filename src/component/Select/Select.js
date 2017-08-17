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
	@observable value = [];

	static propTypes = {
		multi: ProTypes.bool,
	};

	static defaultProps = {
		multi: false
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
		// this.open = (!this.open);
		this.selectedInput.focus();
	};

	handleSelectOption = (val, e) => {
		console.log(val)
		if (this.props.multi) {
			this.addValue(val);
		} else {
			this.setValue(val);
		}
	};

	addValue = val => {
		this.value.push(val);
	};

	setValue = val => {
		this.open = false;
		this.value.splice(0, this.value.length, val);
	};

	renderOptions = () => {
		let options = [
			{
				value: 'sss',
				label: 'sss',
				active: true
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
				onSelect={this.handleSelectOption}
				key={i}
				option={option}
			/>
		});
	}

	render() {
		const {
			multi,

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
					{
						this.value.map( (ele, i) => {
							return <p key={i}>{ele}</p>;
						})
					}

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
