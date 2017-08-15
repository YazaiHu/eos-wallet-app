import React, {Component} from 'react'
import {User} from '../containers'
import Icon from './Icon'

class Header extends Component {
	static defaultProps = {
		className: 'Nav row no-gutters px-4 items-center space-between bg-dark-grey'
	}

	render() {
		const {className} = this.props

		return (
			<header className={className}>
				<Icon />
				<h1>EOS</h1>
				<User />
			</header>
		)
	}
}

export default Header

