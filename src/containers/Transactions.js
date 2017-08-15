import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {List, Icon} from '../components'
import TransactionsQuery from '../query/transactions'

const Transaction = ({ date, sender, memo, amount }) => (
	<div className="-list-item -transaction">
		<div className="-transaction-left">
			<div className="-transaction-date">
				<div className="date-month">{date.month}</div>
				<div className="date-day">{date.day}</div>
			</div>

			<Icon url={sender.icon} />

			<p className="-transaction-memo">{memo}</p>
		</div>

		<div className="-transaction-amount-container">
			<p className="-transaction-amount">{amount}</p>
			<Icon />
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
				month: date.toLocaleString('en-US', { month: 'long' }),
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

