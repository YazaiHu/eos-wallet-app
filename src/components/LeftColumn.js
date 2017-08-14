import React, { Component } from 'react'
import { Link } from 'react-router-dom'  
import AccountInfo from './AccountInfo'

export default class LeftColumn extends Component {
	render() {
		return (
			<div className="col-sm-4 bg-eos-cobalt"> 
				<AccountInfo />	
				<Link className="col-link p-3" to="/">Transfer</Link>
				<Link className="col-link p-3" to="/">Transaction History</Link>
				<Link className="col-link p-3" to="/">Permissions</Link>
				<Link className="col-link p-3" to="/user/1">Users</Link>
				<Link className="col-link p-3" to="/about">About</Link>
				<Link className="col-link p-3" to="/faq">FAQ</Link>
			</div>
		)
	}
}
