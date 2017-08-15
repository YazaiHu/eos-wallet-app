import React, {Component} from 'react'
import {Link} from 'react-router'
import {observer} from 'mobx-react'
import List from '../components/List'
import Icon from '../components/Icon'

const User = ({ url, name, status }) => (
	<Link to={url}>
		<Icon />
		<div>
			<p>{name}</p>
			<p>{status}</p>
		</div>
	</Link to={url}>
)

class Users extends Component {
	render() {
		const {data} = this.props

		return (
			<h3>Users</h3>
			<List
				data={data}
				renderItem={User} />
		)
	}
}

export default Users

