import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
    //we have to use BrowserRouter in order to use routes
    //we have to wrap everything in index.js in BrowserRouter
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
