import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import './styles/styles.scss'
import App from './App.jsx'

const rootElement = document.querySelector('#root')

ReactDOM.render(<App />, rootElement)
