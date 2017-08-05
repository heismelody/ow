import './App.css'

import React from 'react'
import { Button } from './component/Button';
import { Fold } from './component/Fold';
import { Avatar } from './component/Avatar';

import avat from '../tests/9329094.jpeg';

let App = React.createClass({
  render() {
    return <div style={{margin: '100px'}}>
      <Avatar src={avat} color='#CCC'/>
      <Fold/>
    </div>
  }
})

export default App
