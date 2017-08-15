import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon} from '../components'

const User = ({
	className = 'user row',
	greeting,
	link = {
		to: 'www.website.com'
	},
	location,
	name = 'Display Name',
	status,
	styles = {
		displayName: 'display-name',
		location: 'location',
		link: 'link',
		logout: 'logout',
		icon: 'user-icon',
		status: 'status'
	},
}) => (
	<div className={className}>
		<p className={styles.displayName}>{greeting}{name}</p>

		{location && <p className={styles.location}>{location}</p>}

		<div>
			<Link className={styles.link} to={link.to}>{link.to}</Link>
			{greeting &&
				<Link className={styles.logout}><Icon>Logout</Icon></Link>}
		</div>

		<Icon
			className={styles.icon}
			size={location ? Icon.small : Icon.large} />

		{status && <p className={styles.status}>{status}</p>}
	</div>
)

export default User

