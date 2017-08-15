import React, {Component} from 'react'
import Icon from './Icon'

const UserSummary = ({
	className = 'row',
	greeting,
	link = 'www.website.com',
	location,
	name = 'Display Name',
	status,
	styles,
}) => (
	<div className={className}>
		<p className={styles.displayName}>{greeting}{name}</p>

		{location && <p className={styles.location}>{location}</p>}

		<div>
			<Link className={styles.link} to={link.to}>{link.to}</Link>
			{greeting && }
		</div>

		<Icon
			className={styles.icon}
			size={location ? Icon.small : Icon.large} />

		{status && <p className={styles.status}>{status}</p>}
	</div>
)

export default UserSummary

