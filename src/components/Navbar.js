import React, {Component} from 'react'
import Link from './Link'
import {
	Balance,
	Icon,
	List,
} from './'

const NavLink = ({
	className = 'col-link p3',
	icon,
	text,
	...props}) => (
	<Link className={className} {...props}>
		{icon && <Icon {...icon} />}
		{text}
	</Link>
)

class Navbar extends Component {
	static defaultProps = {
		className: 'left-nav',
		styles: {
			list: 'navbar-links'
		},
		links: [
			{ to: '/transfer', text: 'Transfer', icon: null, className: 'col-link logged-in', },
			{ to: '/transactions', text: 'Transaction History', icon: null, className: 'col-link logged-in',  },
			{ to: '/permissions', text: 'Permissions', icon: null, className: 'col-link logged-in', },
			{ to: '/users', text: 'Users' },
			{ to: '/about', text: 'About' },
			{ to: '/user/2', text: 'Users' },
			{ to: '/faq', text: 'FAQ' },
		],
	}

	render() {
		const {className, links, styles} = this.props

		return (
			<nav className={className}>
				<Balance />
				<List
					className={styles.list}
					data={links}
					renderItem={NavLink} />
			</nav>
		)
	}
}

export default Navbar

