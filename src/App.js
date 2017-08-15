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
			<Select/>
    </div>
	}
};