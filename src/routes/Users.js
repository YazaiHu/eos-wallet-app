import React, { Component } from 'react'
import {Users as UsersContainer} from '../containers'

class Users extends Component {
	render() {
		return (
			<div>
				<h2>Users</h2>
				<UsersContainer />
			</div>
		)
	}
}

export default Users

