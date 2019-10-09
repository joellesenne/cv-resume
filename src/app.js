import React from 'react'
import ReactDOM from 'react-dom'

import './styles/app.css'

import Header from './component/Header'
import Article from './component/Article'
import Footer from './component/Footer'

const App = () => (
  <>
    <Header />
    <Article />
    <Footer />
  </>
)

let app = document.getElementById('app')

ReactDOM.render(<App />, app)
