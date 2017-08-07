import './App.css'

import React from 'react'
import { Button } from './component/Button';
import { Fold } from './component/Fold';
import { Avatar } from './component/Avatar';
import { SvgIcon } from './component/Icon';
import { Card } from './component/Card';
import TabTest from './component/Tabs/TabTest';

import avat from '../tests/9329094.jpeg';

let App = React.createClass({
  render() {
    return <div style={{margin: '100px'}}>
      <SvgIcon name='arrowLeft'/>
      <Avatar src={avat} color='#CCC'/>
      <Fold/>

      <Card style={{height: 200, width: 400}}/>
      <TabTest/>
    </div>
  }
})

export default App
