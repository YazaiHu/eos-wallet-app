import React, {Component} from 'react'
import Transactions from '../containers/Transactions'

class TransactionHistory extends Component {
	render() {
		return (
			<div>
                <div className="container-full">
                    <div className="row">
                        <div className="col-12">
                            <h2>Transaction History</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
				            <Transactions />
                        </div>
                    </div>
                </div>
			</div>
		)
	}
}

export default TransactionHistory

