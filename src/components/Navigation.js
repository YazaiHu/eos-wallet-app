import React, { Component } from 'react'
import Avatar from './Avatar'
import '../styles/navigation.scss'

export default class Navigation extends Component {
	render() {
		return (
			<nav className="Nav row no-gutters px-4 items-center space-between bg-dark-grey">
				<h1>EOS</h1>
				<Avatar />
			</nav>
		)
	}
}
