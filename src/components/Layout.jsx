import PropTypes from 'prop-types';
import { LayoutStyled } from './styled/LayoutStyled'

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<LayoutStyled>
			<Header />
			<section>{children}</section>
			<Footer />
		</LayoutStyled>
	)
}

Layout.propTypes = {
	name: PropTypes.string.isRequired,
	children: PropTypes.node
};
