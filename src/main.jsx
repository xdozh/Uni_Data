import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import {SpeedInsights} from "@vercel/speed-insights/vue";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <SpeedInsights/>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
)
