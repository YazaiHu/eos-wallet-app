import React, {Component} from 'react'
import {observer} from 'mobx-react'
import List from '../components/List'
import Icon from '../components/Icon'

const Transaction = ({ date, transaction }) => (
	<div>
		<div>
			<div>
				<p>{date.month}</p>
				<p>{date.date}</p>
			</div>
			<Icon url={transaction.user.icon_url} />
			<p>{transaction.memo}</p>
		</div>

		<div>
			<p>{transaction.amount}</p>
			<Icon />
		</div>
	</div>
)

class Transactions extends Component {
	render() {
		const {data} = this.props

		return (
			<List
				data={data}
				renderItem={Transaction} />
		)
	}
}

export default Transactions

