import React, {Component} from 'react'
import Link from './Link'
import {
	Balance,
	List,
} from './'

const NavLink = ({
	className = 'col-link p3',
	text,
	...props}) => (
	<Link className={className} {...props}>
		{text}
	</Link>
)

const UserLink = ({
	className = 'col-link p3',
    iconClass,
	text,
	...props}) => (
	<Link className={className} {...props}>
		<span className={iconClass}></span>
		{text}
	</Link>
)

class Navbar extends Component {
	static defaultProps = {
		className: 'left-nav',
		styles: {
			list: 'navbar-links',
			userActions: '-is-logged-in',
			userActionsList: '-links'
		},
		userActions: [
			{ to: '/transfer', text: 'Transfer', iconClass: 'icon-eos_icons_transfer', },
			{ to: '/transactions', text: 'Transaction History', iconClass: 'icon-eos_icons_history',  },
			{ to: '/permissions', text: 'Permissions', iconClass: 'icon-eos_icons_permissions', },
		],
		links: [
			{ to: '/users', text: 'Users' },
			{ to: '/about', text: 'About' },
			{ to: '/user/2', text: 'Users' },
			{ to: '/faq', text: 'FAQ' },
		],
	}

	render() {
		const {className, links, styles, userActions} = this.props

		return (
			<nav className={className}>
				<div className={styles.userActions}>
					<Balance />
					<List
						className={styles.userActionLinks}
						data={userActions}
						renderItem={UserLink} />
				</div>

				<List
					className={styles.list}
					data={links}
					renderItem={NavLink} />
			</nav>
		)
	}
}

export default Navbar

