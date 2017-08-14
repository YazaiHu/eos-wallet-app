import React, { Component } from 'react'
import Navigation from './Navigation'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import '../styles/app.css'
import '../styles/flex.css'
import '../styles/spacing.css'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
				<Navigation />
				<div className="row no-gutters p0 container-fluid flex-grow">
					<LeftColumn />
					<RightColumn />
				</div>
      </div>
    )
  }
}

export default App
