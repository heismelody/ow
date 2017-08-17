import React from 'react';
import ProTypes from 'prop-types';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { SvgIcon } from '../Icon';
import SelectOption from './SelectOption';
import SelectedItem from './SelectedItem';

require('./styles/Select.default.less');

@observer
export default class Select extends React.Component {
	@observable open = false;
	@observable values = [{
			key: 1,
			value: 'sss',
			label: 'sss',
			active: true
		},{
			key: 2,
			value: 'aaa',
			label: 'sss',
		},{
			key: 3,
			value: 'sss',
			label: 'bbb',
		},{
			key: 4,
			value: 'ccc',
			label: 'ddd',
		},{
			key: 5,
			value: 'eee',
			label: 'fff',
		},{
			key: 6,
			value: 'fde',
			label: 'sdf',
			disabled: true
		},{
			key: 7,
			value: 'fde',
			label: 'sdf',
			disabled: true
		},{
			key: 8,
			value: 'sss',
			label: 'sss',
			active: true
		},{
			key: 9,
			value: 'aaa',
			label: 'sss',
		},{
			key: 10,
			value: 'sss',
			label: 'bbb',
		},{
			key: 11,
			value: 'ccc',
			label: 'ddd',
		},{
			key: 12,
			value: 'eee',
			label: 'fff',
		},{
			key: 13,
			value: 'fde',
			label: 'sdf',
			disabled: true
		},
	];

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
		this.refs.selectedInput.focus();
	};

	handleSelectOption = (val, e) => {
		if (this.props.multi) {
			this.addValue(val);
		} else {
			this.setValue(val);
		}
	};

	clearValues = () => {
		this.values.splice(0, this.values.length);
	};

	removeValue = val => {
		console.warn(val);
		this.values = this.values.filter( item => val.key != item.key );
	};

	addValue = val => {
		this.values.push(val);
	};

	setValue = val => {
		console.warn(val)
		this.open = false;
		this.values.splice(0, this.values.length, val);
	};

	renderClearIcon = () => {
		return (
			<div className='ow-select-values-clear' onClick={this.clearValues}>
				<SvgIcon name='close' color='#b6b6b6' size='sm'/>
			</div>
		)
	};

	renderCollpaseIcon = () => {
		return (
			<SvgIcon
				className={[this.open ? 'ow-collapse-icon-opened': '', 'ow-collapse-icon'].join(' ')}
				size='sm'
				onClick={this.handleToggleList}
				name='chevronRight'
				color='#b6b6b6'
			/>
		);
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
			},{
				value: 'fde',
				label: 'sdf',
				disabled: true
			},{
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
			},
		];

		return options.map( (option,i) => {
			return <SelectOption
				onSelect={this.handleSelectOption}
				key={i}
				option={option}
			/>
		});
	};

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
				<div className="ow-select-body">
					<div className='ow-select-values'>
						{
							this.values.map( (item, index) => {
								return (
									<SelectedItem
										key={index}
										onClear={this.clearValues}
										value={item}
										onRemoveValue={this.removeValue}
									/>
								);
							})
						}
						<input
							className='ow-select-values-input'
							type='text'
							ref='selectedInput'
						/>
						{
							this.renderClearIcon()
						}
					</div>

					{
						this.renderCollpaseIcon()
					}
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
