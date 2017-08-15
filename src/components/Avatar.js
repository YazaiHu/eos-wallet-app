import React, { Component } from 'react'

class Avatar extends Component {
    render() {
        return (
            <div className="Avatar">
                <div className="thumbnail">
                    <div className="settings icon-eos_icons_settings"></div>
                </div>
                <div className="meta">
                    <div className="display-name">Hi, DisplayName</div>
                    <div className="url">
                        steemit.com/@username
                         | <span className="icon-eos_icons_logout"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Avatar