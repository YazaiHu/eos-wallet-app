import React, { Component } from 'react'
import { Route } from 'react-router'
import Navigation from './Navigation'
import LeftColumn from './LeftColumn'
import Home from '../routes/Home'
import Profile from '../routes/Profile'
import About from '../routes/About'
import Faqs from '../routes/Faqs'
import '../styles/app.scss'
import '../styles/typography.scss'
import '../styles/flex.scss'
import '../styles/colors.scss'

class App extends Component {
  render() {
    return (
      <div className="app container-fluid">
				<Navigation />
				<div className="row no-gutters p-0 container-fluid flex-grow">
					<LeftColumn />
					<div className="main-content">
						<Route exact path="/" component={Home} />
						<Route path="/user/:id" component={Profile} />
						<Route path="/about" component={About} />
						<Route path="/faqs" component={Faqs} />
					</div>
				</div>
      </div>
    )
  }
}

export default App
