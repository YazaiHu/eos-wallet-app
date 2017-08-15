import React, { Component } from 'react'

class Avatar extends Component {
    render() {
        return (
            <div className="Avatar">
                <div className="thumbnail">
                    <div className="settings"></div>
                </div>
                <div className="meta">
                    <div className="display-name">Hi, DisplayName</div>
                    <div className="url">
                        steemit.com/@username
                        <span> | <div className="icon"></div></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Avatar