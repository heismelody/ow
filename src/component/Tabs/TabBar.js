import React from 'react';
import ProTypes from 'prop-types';

require('./styles/TabBar.default.less');

export default class TabBar extends React.Component {
	static propTypes = {
		active: ProTypes.number,
		disabled: ProTypes.array,
		items: ProTypes.object,
	};

	static defaultProps = {
	};

	onActiveTabChange = e => {
		this.props.onActiveTabChange(e.target.value);
	};

	render() {
		const {
			active,
			disabled,
			items,
			onActiveTabChange,

			...other
		} = this.props;

		const tabItems = Object.keys(items).map((key, index) => {
			const itemProps = {
				className: (active == key) ? 'active ow-tabbar-item' : 'ow-tabbar-item',
				disabled: (disabled.indexOf(parseInt(key)) !== -1),
			};

			return <li
				key={key}
				value={key}
				{...itemProps}
				onClick={this.onActiveTabChange}
			>
				{items[key]}
			</li>
		});

		return (
			<ul
				{...other}
				className='ow-tabbar'
			>
				{tabItems}
			</ul>
		);
	}
}
