import React, {Component} from 'react'
// import validation
// import mutation

class ResetPassword extends Component {
	render() {
		return (
			<form>
				<fieldset>
					<label>Current password</label>
					<input type="text" />
				</fieldset>

				<fieldset>
					<label>New password</label>
					<input type="text" />
				</fieldset>

				<button type="submit">Sumbit</button>
			</form>
		)
	}
}

export default ResetPassword

