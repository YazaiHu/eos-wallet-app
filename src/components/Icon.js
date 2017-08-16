import React, {Component} from 'react'

const Icon = ({
	className,
	alt = "Image",
	url,
	style = {
		icon: '-icon-class'
	}}) => (
	<div className={className}>
		<i
			aria-label={alt}
			className={style.icon}
			style={{ backgroundImage: `url(${url})` }} />
	</div>
)

export default Icon

