import './App.css'

import React from 'react'
import { Button } from './component/Button';
import { Collapse } from './component/Collapse';
import { Avatar } from './component/Avatar';
import { SvgIcon } from './component/Icon';
import { Card } from './component/Card';
import TabTest from './component/Tabs/TabTest';

import avat from '../tests/9329094.jpeg';

let App = React.createClass({
  render() {
    return <div style={{margin: '100px'}}>
      {/*<SvgIcon name='arrowLeft'/>*/}
      {/*<Avatar src={avat} color='#CCC'/>*/}
      <Collapse
        title='How do i mesdfsd fsdfggfd gdfgfs dfsfds fsdfdssdfs dfss'
        content={
          <div>The transform-origin property is separate from the transform property but works in tandem with it. It allows you to specify the location origin of the transform. By default, the origin is in the center of the element.
          </div>
        }
      />
        {/*<Card style={{height: 200}}>*/}
          {/*<TabTest/>*/}
        {/*</Card>*/}
    </div>
  }
})

export default App
