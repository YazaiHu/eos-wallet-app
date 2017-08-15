import React, { Component } from 'react'
import { Link } from 'react-router-dom'  
import AccountInfo from './AccountInfo'
import '../styles/navigation.scss'

export default class LeftColumn extends Component {
	render() {
		return (
			<div className="left-nav"> 
				<AccountInfo />
				<Link className="col-link nav-primary" to="/user/1">Users</Link>
				<Link className="col-link nav-primary" to="/about">About</Link>
				<Link className="col-link nav-primary" to="/faq">FAQ</Link>
			</div>
		)
	}
}
