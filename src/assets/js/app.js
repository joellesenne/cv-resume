import React from 'react'
import ReactDOM from 'react-dom'
import CookieConsent from "react-cookie-consent";
import ReactGA from 'react-ga';

import '../css/app.css'

import Header from '../../component/Header'
import Article from '../../component/Article'
import Footer from '../../component/Footer'
import CarbonBadge from "react-carbonbadge";

const App = () => (
  <>
	  <Header />
	  <Article />
	  <Footer />
	  <CarbonBadge darkMode={false} />
	  <CookieConsent
		  enableDeclineButton
		  location="bottom"
		  buttonText="Accepter"
		  declineButtonText="Refuser"
		  cookieName="myAwesomeCookieName2"
		  style={{ backgroundColor: "var(--colorPrimary)" }}
		  declineButtonStyle={{backgroundColor: "#eb5757", color: "var(--colorWhite)"}}
		  buttonStyle={{ color: "var(--colorWhite)", fontSize: "13px", backgroundColor: "#27ae60" }}
		  expires={150}
	  >Ce site utilise des cookies pour assurer le bon fonctionnement des procédures et améliorer l'expérience de l'utilisation d'applications en ligne.</CookieConsent>
  </>
)

ReactGA.initialize('G-F50P1V1387');
ReactGA.pageview(window.location.pathname + window.location.search);

let app = document.getElementById('app')

ReactDOM.render(<App />, app)
