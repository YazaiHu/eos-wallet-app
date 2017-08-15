import React, {Component} from 'react'
import {observer} from 'mobx-react'

class Balance extends Component {
	static defaultProps = {
		className: 'account-info',
		styles: {
			primary: 'nav-primary',
			balance: 'balance',
			change: 'change',
		},
		account: {
			value: {
				belongsTo: ['My', ''],
			},
			formattedBalance: '0.500',
			priceUpdate: '+27.600'
		}
	}

	render() {
		const {account, className, styles} = this.props

		return (
			<div className={className}>
				<div className={styles.primary}>{account.value.name} EOS</div>
				<div className={styles.balance}>{account.formattedBalance}</div>
				<div className={styles.change}>{account.priceUpdate}</div>
			</div>
		)
	}
}

export default Balance

