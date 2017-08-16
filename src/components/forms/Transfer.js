import React, {Component} from 'react'
// import validation
// import mutation

class TransferForm extends Component {
	render() {
		return (
			<form>
				<div className="form-group">
					<label for="to">To</label>
					<input type="text" className="form-control form-control-lg" id="to" aria-describedby="to"></input>
				</div>
				<div className="form-group">
					<label for="amount">Amount</label>
					<input type="text" className="form-control form-control-lg" id="amount" aria-describedby="amount"></input>
					<small className="form-text text-muted"><a>Balance: 0.000 EOS</a></small>
				</div>
				<div className="form-group">
					<label for="memo">Email address</label>
					<input type="text" className="form-control form-control-lg" id="memo" aria-describedby="emailHelp" placeholder="0.000"></input>
				</div>
				<button type="button" className="btn btn-primary btn-lg">Submit</button>
				<button type="button" className="btn btn-secondary btn-lg">Clear</button>
			</form>
		)
	}
}

export default TransferForm

