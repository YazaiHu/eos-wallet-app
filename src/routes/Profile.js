import React, {Component} from 'react'
import UserSummary from '../containers/UserSummary'
import TransactionHistory from '../containers/TransactionHistory'
//import UserQuery from '../query/User'

class Profile extends Component {
	render() {
		return (
			<div>
				<UserSummary />
				<TransactionHistory />
			</div>
		)
	}
}

export default Profile

