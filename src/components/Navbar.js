import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Balance from './Balance'

class Navbar extends Component {
	static defaultProps = {
		className: 'col-sm-4 bg-eos-cobalt',
		styles: {
			link: 'col-link p3',
			activeLink: 'active',
		},
		links: [
			{ to: '/transfer', text: 'Transfer', icon: null, },
			{ to: '/transactions', text: 'Transaction History', icon: null },
			{ to: '/permissions', text: 'Permissions', icon: null },
			{ to: '/users', text: 'Users', icon: null },
			{ to: '/about', text: 'About', icon: null },
			{ to: '/user/2', text: 'Users', icon: null },
			{ to: '/faq', text: 'FAQ', icon: null },
		],
	}

	render() {
		const {className, links} = this.props

		return (
			<nav className={className}>
				<Balance />
				{links.map((data, key) => <Link {...{key, ...data}}>{text}</Link>)}
			</nav>
		)
	}
}

export default Navbar

