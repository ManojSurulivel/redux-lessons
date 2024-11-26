// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { store } from './app/store';
// import { Provider } from 'react-redux';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { Provider } from "react-redux";
import { store } from "./store.js";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>  
  </StrictMode>,
)
