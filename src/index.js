import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'babel-polyfill'

const rootNode = document.querySelector('#root')
ReactDOM.render(<App />, rootNode)
