import React, {Component} from 'react'

class List extends Component {
	render() {
		const {data, renderItem, ...props} = this.props

		return (
			<ul {...props}>
				{data.map((item, key) =>
					<li key={key}>{renderItem({key, ...item})}</li>)}
			</ul>
		)
	}
}

export default List

