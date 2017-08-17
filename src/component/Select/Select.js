import React from 'react';
import ProTypes from 'prop-types';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import { SvgIcon } from '../Icon';
import SelectOption from './SelectOption';
import SelectedItem from './SelectedItem';

require('./styles/Select.default.less');

@observer
export default class Select extends React.Component {
	@observable open = false;
	@observable values = [];
	@observable options = [];
	// @computed get values() {
	// 	return this.options.filter( option => option.active == true );
	// }

	static propTypes = {
		multi: ProTypes.bool,
		options: ProTypes.array,
	};

	static defaultProps = {
		multi: false
	};

	constructor(props) {
		super(props);

		this.options = props.options.slice();
		this.values = props.options.filter( option => option.active == true);
	}

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
		this.refs.selectedInput.focus();
	};

	handleSelectOption = (val, e) => {
		if (this.props.multi) {
			this.addValue(val);
		} else {
			this.setValue(val);
		}
	};

	clearValues = e => {
		e.stopPropagation();
		this.refs.selectedInput.focus();
		this.values.splice(0, this.values.length);
	};

	removeValue = (e,val) => {
		e.stopPropagation();
		this.refs.selectedInput.focus();
		// this.options.filter( item => val.key != item.key );
		this.values = this.values.filter( item => val.key != item.key );
	};

	addValue = val => {
		this.values.push(val);
	};

	setValue = val => {
		this.open = false;
		this.refs.selectedInput.focus();
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
		return this.options.map( (option,i) => {
			return (
				<SelectOption
					onSelect={this.handleSelectOption}
					key={option.key}
					option={option}
				/>
			);
		});
	};

	render() {
		const {
			multi,
			options,

			...other
		} = this.props;

		return (
			<div
				{...other}
				className={['ow-select',this.open && 'ow-select-open'].filter(e => !!e).join(' ')}
			  ref='owSelect'
			>
				<div
					className="ow-select-body"
					onClick={this.handleSelectClick}
				>
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
							(this.values.length) > 0 && this.renderClearIcon()
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
