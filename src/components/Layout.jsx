import React from 'react'
import PropTypes from 'prop-types'
import { LayoutStyled } from './styled/LayoutStyled'


import Header from '../components/header'
import Footer from '../components/footer'


const Layout = ({ children }) => {
	return (
		<LayoutStyled>
			<Header/>
			<section>{children}</section>
			<Footer />
		</LayoutStyled>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
