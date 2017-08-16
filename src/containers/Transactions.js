import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {List, Icon} from '../components'
import TransactionsQuery from '../query/transactions'

const Transaction = ({ date, sender, memo, amount }) => (
	<div className="-list-item -transaction d-flex flex-row">
		<div className="-transaction-left d-flex flex-row">
			<div className="-transaction-date">
				<div className="date-month">{date.month}</div>
				<div className="date-day">{date.day}</div>
			</div>

			<Icon className="-thumbnail" url={sender.icon} />

			<div className="-transaction-memo">
                <p>{memo}</p>
            </div>
		</div>

		<div className="-transaction-amount-container d-flex flex-row-reverse">
			<Icon className="-transaction-icon icon-eos_icons_transfer_to" />
            <p className="-transaction-amount">{amount}</p>
		</div>
	</div>
)

class Transactions extends Component {
	static defaultProps = {
		data: TransactionsQuery
	}

	dataTransform(data) {
		return data.map(item => {
			const date = new Date(item.date)
			item.date = {
				month: date.toLocaleString('en-US', { month: 'long' }).substr(0, 3),
				day: date.getDay()
			}
			return item
		})
	}

	render() {
		const {data} = this.props

		return (
			<List
				data={this.dataTransform(data)}
				renderItem={Transaction} />
		)
	}
}

export default Transactions

