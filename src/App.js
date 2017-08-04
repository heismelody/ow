import './App.css'

import React from 'react'
import { Button } from './component/Button';
import { Fold } from './component/Fold';

let App = React.createClass({
  render() {
    return <div style={{margin: '100px'}}>

      <Fold/>
    </div>
  }
})

export default App
