import React, {Component} from 'react'

class List extends Component {
	render() {
		const {className, data, renderItem} = this.props

		return (
			<ul className={className}>
				{data.map((item, key) =>
					<li key={key}>{renderItem({key, ...item})}</li>)}
			</ul>
		)
	}
}

export default List

