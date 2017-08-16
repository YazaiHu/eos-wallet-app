import React, {Component} from 'react'
// import validation
// import mutation

class TransferForm extends Component {
	static defaultProps = {
		balance: '0.000'
	}

	constructor(props, context) {
		super(props, context)

		this.state = {
			amount: 0,
			emailAddress: '',
			memo: '',
		}
	}

	onChange(e) {
		const name = e.target.name
		const value = e.target.value

		this.setState({ [name]: value })
	}

	clearInputs() {
		this.setState({
			amount: '',
			emailAddress: '',
			memo: '',
		})
	}

	render() {
		const {amount, emailAddress, memo,} = this.state
		const {balance} = this.props

		return (
			<form>
				<fieldset className="form-group">
					<label htmlFor="to">To</label>
					<input
						type="email"
						className="form-control form-control-lg"
						id="to"
						name="emailAddress"
						value={emailAddress}
						onChange={this.onChange.bind(this)}
						aria-describedby="to"></input>
				</fieldset>

				<fieldset className="form-group">
					<label htmlFor="amount">Amount</label>
					<input
						required
						pattern="\d*"
						type="text"
						className="form-control form-control-lg"
						id="amount"
						name="amount"
						value={amount}
						onChange={this.onChange.bind(this)}
						aria-describedby="amount"></input>

					<small className="form-text text-muted"><a>Balance: {balance} EOS</a></small>
				</fieldset>

				<fieldset className="form-group">
					<label htmlFor="memo">Memo</label>
					<input
						type="text"
						className="form-control form-control-lg"
						id="memo"
						name="memo"
						value={memo}
						onChange={this.onChange.bind(this)}
						aria-describedby="emailHelp"
						placeholder="Memo here"></input>
				</fieldset>

				<button type="submit" className="btn btn-primary btn-lg">Submit</button>
				<button
					type="button"
					onClick={this.clearInputs.bind(this)}
					className="btn btn-secondary btn-lg">Clear</button>
			</form>
		)
	}
}

export default TransferForm

