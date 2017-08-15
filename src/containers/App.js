import React, {Component} from 'react'
import {Route} from 'react-router'
import {
	Home,
	Profile,
	About,
	Faqs} from 'routes'

const Scene = ({children, className = 'row no-gutters p-0 container-fluid flex-grow', ...props}) => 
	<div {...props}>{children}</div>

class App extends Component {
	static defaultProps = {
		className: 'App container-fluid'
	}

	render() {
		const {className} = this.props

		return (
			<main className={className}>
				<Header />
				<Navbar />
				<Scene>
					<Route exact path="/" component={Home} />
					<Route path="/user/:id" component={Profile} />
					<Route path="/about" component={About} />
					<Route path="/faqs" component={Faqs} />
				</Scene>
			</main>
		)
	}
}

export default App

