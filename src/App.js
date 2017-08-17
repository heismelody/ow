import './App.css'

import React from 'react'
import { Button } from './component/Button';
import { Collapse } from './component/Collapse';
import { Avatar } from './component/Avatar';
import { SvgIcon } from './component/Icon';
import { Card } from './component/Card';
import TabTest from './component/Tabs/TabTest';
import { Toggle } from './component/Toggle';
import { Input } from './component/Input';
import { Select } from './component/Select';

import avat from '../tests/9329094.jpeg';
require('./assets/theme/page.default.less');

const options = [
	{
		value: 'sss',
		label: 'sss',
		active: true,
		key: 1,
	},{
		value: 'aaa',
		label: 'sss',
		key: 2,
	},{
		value: 'sss',
		label: 'bbb',
		key: 3,
	},{
		value: 'ccc',
		label: 'ddd',
		key: 4,
	},{
		value: 'eee',
		label: 'fff',
		key: 5,
	},{
		value: 'fde',
		label: 'sdf',
		disabled: true,
		key: 6,
	},{
		value: 'fde',
		label: 'sdf',
		disabled: true,
		key: 7,
	},{
		value: 'sss',
		label: 'sss',
		active: true,
		key: 8,
	},{
		value: 'aaa',
		label: 'sss',
		key: 9,
	},{
		value: 'sss',
		label: 'bbb',
		key: 10,
	},{
		value: 'ccc',
		label: 'ddd',
		key: 11,
	},{
		value: 'eee',
		label: 'fff',
		key: 12,
	},{
		value: 'fde',
		label: 'sdf',
		disabled: true,
		key: 13,
	},
];
export default class App extends React.Component {
	render() {
		return <div style={{margin: '100px'}}>
			{/*<SvgIcon name='arrowLeft'/>*/}
			{/*<Avatar src={avat} color='#CCC'/>*/}
			{/*<Collapse*/}
			{/*title='How do i mesdfsd fsdfggfd gdfgfs dfsfds fsdfdssdfs dfss'*/}
			{/*content={*/}
			{/*<div>The transform-origin property is separate from the transform property but works in tandem with it. It allows you to specify the location origin of the transform. By default, the origin is in the center of the element.*/}
			{/*</div>*/}
			{/*}*/}
			{/*/>*/}
			{/*<Card style={{height: 200}}>*/}
			{/*<TabTest/>*/}
			{/*</Card>*/}

			{/*<Toggle/>*/}
			{/*<Input/>*/}
			<Select options={options} multi={true}/>
    </div>
	}
};