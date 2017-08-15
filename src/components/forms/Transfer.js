import React, {Component} from 'react'
// import validation
// import mutation

class TransferForm extends Component {
	render() {
		return (
			<form>
				<fieldset>
					<label>To</label>
					<input type="text" />
				</fieldset>

				<fieldset>
					<label>Amount</label>
					<input type="text" />
				</fieldset>

				<fieldset>
					<label>Memo</label>
					<input type="text" />
				</fieldset>

				<button type="submit">Submit</button>
				<div>Clear</div>
			</form>
		)
	}
}

export default TransferForm

