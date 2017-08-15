import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './containers'
import createHistory from 'history/createBrowserHistory'
import {Router} from 'react-router'

// TODO assess if needed
import registerServiceWorker from './func/registerServiceWorker'

import './styles/bootstrap.scss'
import './styles/index.scss'

const history = createHistory()

ReactDOM.render(
	<Router history={history}>
		<App />
	</Router>,
	document.getElementById('root')
)

registerServiceWorker()

