import React, { Component } from 'react'
import Avatar from './Avatar'
import '../styles/header.scss'

export default class Navigation extends Component {
	render() {
		return (
			<nav className="header row no-gutters items-center space-between">
				<h1>EOS</h1>
				<Avatar />
			</nav>
		)
	}
}
