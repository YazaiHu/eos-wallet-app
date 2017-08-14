import React, { Component } from 'react'
import { Route } from 'react-router'
import Navigation from './Navigation'
import LeftColumn from './LeftColumn'
import Profile from '../routes/Profile'
import Preferences from '../routes/Preferences'
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
					<div className="col-sm-8">
						<Route path="/" component={Profile} />
						<Route path="/preferences" component={Preferences} />
					</div>
				</div>
      </div>
    )
  }
}

export default App
