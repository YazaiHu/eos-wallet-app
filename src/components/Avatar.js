import React, { Component } from 'react'

class Avatar extends Component {
  render() {
    return (
      <div className="Avatar">
				<div>
					<h4>Hello DisplayName,</h4>
					<p>
						steemit.com/@username
						<span> |</span>
					</p>
				</div>
				<div className="icon"></div>
      </div>
    )
  }
}

export default Avatar
