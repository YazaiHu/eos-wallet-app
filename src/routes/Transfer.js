import React, {Component} from 'react'
import TransferForm from '../components/forms/Transfer'
import Transactions from '../containers/Transactions'

class Transfer extends Component {
	render() {
		return (
			<div>
				<h3>Transfer</h3>
				<p>Move funds to another EOS account.</p>
				<TransferForm />
				<Transactions />
			</div>
		)
	}
}

export default Transfer

