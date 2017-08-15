import React, {Component} from 'react'
import {Route} from 'react-router'
import {
	Header,
	Footer,
	Navbar} from '../components'
import {
	About,
	Faqs,
	Home,
	Permissions,
	Preferences,
	Profile,
	TransactionHistory,
	Transfer,
	Users} from '../routes'

const Scene = ({children, className = 'row no-gutters p-0 container-fluid flex-grow', ...props}) =>
	<div className={className} {...props}>{children}</div>

class App extends Component {
	static defaultProps = {
		className: 'App container-fluid p-0 row no-gutters<header class="Nav row no-gutters px-4 items-center space-between bg-dark-grey flex-grow'
	}

	render() {
		const {className} = this.props

		return (
			<main className={className}>
				<Header />
				<Navbar />
				<Scene>
					<Route exact path="/" component={Home} />
					<Route path="/transfer" component={Transfer} />
					<Route path="/transactions" component={TransactionHistory} />
					<Route path="/permissions" component={Permissions} />
					<Route path="/user/:id" component={Profile} />
					<Route path="/about" component={About} />
					<Route path="/faqs" component={Faqs} />
					<Route path="/users" component={Users} />
					<Route path="/preferences" component={Preferences} />
					<Footer />
				</Scene>
			</main>
		)
	}
}

export default App

