import './App.css'

import React from 'react'
import { Button } from './component/Button';
import { Fold } from './component/Fold';
import { Avatar } from './component/Avatar';
import { SvgIcon } from './component/Icon';
import { Card } from './component/Card';

import avat from '../tests/9329094.jpeg';

let App = React.createClass({
  render() {
    return <div style={{margin: '100px'}}>
      <SvgIcon name='arrowLeft'/>
      <Avatar src={avat} color='#CCC'/>
      <Fold/>

      <Card style={{height: 100, width: 100}}/>
    </div>
  }
})

export default App
