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
		className: 'col-sm-4 bg-eos-cobalt',
		styles: {
			list: 'navbar-links'
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

