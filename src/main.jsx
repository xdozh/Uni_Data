import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/next';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <App />
        <SpeedInsights />
    </Router>
  </React.StrictMode>,
)
