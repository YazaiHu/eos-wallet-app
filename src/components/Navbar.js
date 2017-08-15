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
			{ to: '/', text: 'Transfer', icon: null, },
			{ to: '/', text: 'Transaction History', icon: null },
			{ to: '/', text: 'Permissions', icon: null },
			{ to: '/', text: 'Users', icon: null },
			{ to: '/', text: 'About', icon: null },
			{ to: '/', text: 'Users', icon: null },
			{ to: '/', text: 'FAQ', icon: null },
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

