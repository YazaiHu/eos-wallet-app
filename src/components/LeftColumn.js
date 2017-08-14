import React, { Component } from 'react'
import { Link } from 'react-router-dom'  

export default class LeftColumn extends Component {
	render() {
		return (
			<div className="col-sm-4"> 
				<Link className="col-link p-3" to="/">Home</Link>
				<Link className="col-link p-3" to="/preferences">Preferences</Link>
				<Link className="col-link p-3" to="/user/2">Profile</Link>
			</div>
		)
	}
}
