import React, {Component} from 'react'

const ListItem = ({children, ...props}) => <li {...props}>{children}</li>

class List extends Component {
	render() {
		const {data, renderItem} = this.props

		return (
			<ul>
				{data.map((item, key) => renderItem({key, ...item}))}
			</ul>
		)
	}
}

export default List

