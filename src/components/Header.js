import React, {Component} from 'react'
import Avatar from './Avatar'

class Header extends Component {
	static defaultProps = {
		className: 'Nav row no-gutters px-4 items-center space-between bg-dark-grey' 
	}

	render() {
		const {className} = this.props

		return (
			<nav className={className}>
				<h1>EOS</h1>
				<Avatar />
			</nav>
		)
	}
}

export default Header

