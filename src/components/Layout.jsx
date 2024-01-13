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
