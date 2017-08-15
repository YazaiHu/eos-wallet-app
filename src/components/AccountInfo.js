import React, { Component } from 'react'
import { Link } from 'react-router-dom'  
import AccountInfo from './AccountInfo'

export default class LeftColumn extends Component {
	render() {
		const { account } = this.props

		return (
            <div className="logged-in">
                <div className="account-info">
                    <div className="nav-primary">{account.value.name}</div>
                    <div className="balance">{account.formattedBalance}</div>
                    <div className="change">{account.priceUpdate}</div>
                </div>
                <div>
                    <Link className="col-link" to="/">
                        <span className="icon-eos_icons_transfer"></span>
                        Transfer
                    </Link>
                    <Link className="col-link" to="/">
                        <span className="icon-eos_icons_history"></span>        Transaction History
                    </Link>
                    <Link className="col-link" to="/">
                        <span className="icon-eos_icons_permissions"></span>
                        Permissions
                    </Link>
                </div>
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
