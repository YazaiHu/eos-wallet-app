import React, {Component} from 'react'

const Icon = ({ alt = "Image", url, size = '' }) => (
	<figure>
		<i
			aria-label={alt}
			className={`icon ${size}`}
			style={{ backgroundImage: `url(${url})` }} />
	</figure>
)

export default Icon

