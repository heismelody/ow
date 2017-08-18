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
	@observable values = new Array(1);
	@observable options = new Array(1);

	static propTypes = {
		multi: ProTypes.bool,
		options: ProTypes.array,
	};

	static defaultProps = {
		multi: false
	};

	constructor(props) {
		super(props);

		this.options = this.props.options.slice();
		this.values = this.props.options.filter( option => option.active == true);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	componentWillReceiveProps(nextProps) {
		this.options = nextProps.options.slice();
		this.values = nextProps.options.filter( option => option.active == true);
	}

	handleInputKeydown = e => {
		const key = e.keyCode || e.charCode;

		if ((key == 8 || key == 46) && (this.refs.selectedInput.value.length === 0)) {
			this.values.pop();
		}
	};

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
		this.values = this.values.filter( item => val.key != item.key );
	};

	addValue = val => {
		let isActive = false;
		let activeIndex = 0;

		this.values.forEach( (value,index) => {
			if (value.key == val.key) {
				isActive = true;
				activeIndex = index;
				return;
			}
		});
		//if selected values contain val, then change this val's state to unselected
		if (isActive) {
			this.values.splice(activeIndex, 1);
		} else {
			//We didn't find the val in selected values , then set to this value.
			this.values.push(val);
		}
	};

	setValue = val => {
		this.open = false;
		this.refs.selectedInput.focus();

		if (this.values.length > 0 && (this.values[0].key == val.key)) {
			this.values.splice(0, 1);
		} else {
			this.values.splice(0, this.values.length, val);
		}
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
			let actived = false;

			for(let val of this.values) {
				if (val.key == option.key) {
					actived = true;
					break;
				}
			}

			return (
				<SelectOption
					onSelect={this.handleSelectOption}
					key={option.key}
					option={option}
				  disable={option.disabled}
				  actived={actived}
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
						  onKeyDown={this.handleInputKeydown}
						/>
						{
							(this.values.length) > 0 && this.renderClearIcon()
						}
					</div>

					{ this.renderCollpaseIcon() }
				</div>

				<ul className="ow-select-list">
					{ this.renderOptions() }
				</ul>
			</div>
		);
	}
}
