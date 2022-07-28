import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import { store } from './config/store';
import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const history = createBrowserHistory();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element= {<App />} />  
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
