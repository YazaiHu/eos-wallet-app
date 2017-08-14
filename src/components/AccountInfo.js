import React, { Component } from 'react'
import { Link } from 'react-router-dom'  
import AccountInfo from './AccountInfo'

export default class LeftColumn extends Component {
	render() {
		const { account } = this.props

		return (
			<div class="account-info">
				<small>{account.value.name}</small>
				<p>{account.formattedBalance}</p>
				<small>{account.priceUpdate}</small>
			</div>
		)
	}
}


LeftColumn.defaultProps = {
	account: {
		value: {
			name: 'My Eos',
		},
		formattedBalance: '0.500',
		priceUpdate: '+27.600'
	}
}
