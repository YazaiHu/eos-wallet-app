import React, {Component} from 'react'
// import validation
// import mutation

class Login extends Component {
	render() {
		return (
			<form>
				<fieldset>
					<label>Username</label>
					<input type="text" />
				</fieldset>

				<fieldset>
					<label>Password</label>
					<input type="text" />
				</fieldset>

				<fieldset>
					<label>Keep me logged in</label>
					<input type="checkbox" />
				</fieldset>

				<button type="submit">Login</button>
			</form>
		)
	}
}

export default Login


