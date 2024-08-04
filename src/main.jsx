// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/store';
import './index.css';
import DemoComponent from './features/demo/DemoComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/theme.css';
import './fontAwesome'; 
import { register, unregister } from '../serviceWorker';
// import reportWebVitals from './reportWebVitals';

// register({
//   onSuccess: (registration) => {
//     console.log('Service Worker registered successfully', registration);
//   },
//   onUpdate: (registration) => {
//     console.log('Service Worker updated', registration);
//   },
// });

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);


// reportWebVitals to measure performance
// reportWebVitals();