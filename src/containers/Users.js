import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
	</Link>
)

class Users extends Component {
	render() {
		const {data} = this.props

		return (
			<List
				data={data}
				renderItem={User} />
		)
	}
}

export default Users

