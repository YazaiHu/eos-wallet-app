import React, {Component} from 'react'

const Icon = ({
	className,
	alt = "Image",
	url,
	size = '' }) => (
	<i
		aria-label={alt}
		className={className}
		style={{ backgroundImage: `url(${url})` }} />
)

export default Icon

