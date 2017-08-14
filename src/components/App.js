import React, { Component } from 'react'
import { Route } from 'react-router'
import Navigation from './Navigation'
import LeftColumn from './LeftColumn'
import Home from '../routes/Home'
import Profile from '../routes/Profile'
import Preferences from '../routes/Preferences'
import '../styles/app.css'
import '../styles/typography.css'
import '../styles/flex.css'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
				<Navigation />
				<div className="row no-gutters p-0 container-fluid flex-grow">
					<LeftColumn />
					<div className="pt-4 col-sm-8">
						<Route exact path="/" component={Home} />
						<Route path="/user/:id" component={Profile} />
						<Route path="/preferences" component={Preferences} />
					</div>
				</div>
      </div>
    )
  }
}

export default App
