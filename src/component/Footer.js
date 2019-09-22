import React from 'react'

import Badge from './Badge'

const lists = ['Photographie', 'PAO', 'Vélo', 'Natation']

const Footer = () => (
	<footer className="footer">
		<h2>Centres d'intérêts</h2>
		<hr />
		<Badge lists={lists} />
	</footer>
)

export default Footer
