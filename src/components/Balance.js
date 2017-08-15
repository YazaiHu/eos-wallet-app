import React, {Component} from 'react'
import {observer} from 'mobx-react'

class Balance extends Component {
	static defaultProps = {
		account: {
			value: {
				belongsTo: ['My', ''],
			},
			formattedBalance: '0.500',
			priceUpdate: '+27.600'
		}
	}

	render() {
		const {account} = this.props

		return (
			<div>
				<small>{account.value.name} EOS</small>
				<p>{account.formattedBalance}</p>
				<small>{account.priceUpdate}</small>
			</div>
		)
	}
}

export default Balance

