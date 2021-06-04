import React, { Component } from 'react'
import './App.css'

import LinkageGroup from './components/LinkageGroup'
class App extends Component {
   render() {
   return (
      <div className='App'>
      <div className='App-header'>
      <h2>dmap dashboard</h2>
      </div>
      <div id='myid'>
      <LinkageGroup data={[10,20,40,60,80,100,120]} size={[800,500]} />
      </div>
      </div>
   )
   }
}
export default App
