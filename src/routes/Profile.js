import React, {Component} from 'react'
import {
	User,
	Transactions
} from '../containers'

class Profile extends Component {
	render() {
		return (
			<div>
				<User />
				<Transactions />
			</div>
		)
	}
}

export default Profile

