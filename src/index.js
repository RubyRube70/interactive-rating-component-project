import React from 'react';
import Router from './components/Router'
import ReactDom from 'react-dom/client'

const root = ReactDom.createRoot(document.getElementById('main'))
root.render(<Router />)