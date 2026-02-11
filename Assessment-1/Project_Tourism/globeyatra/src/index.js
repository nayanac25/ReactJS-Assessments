import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/styles.css';
import './style/about.css'
import './style/packages.css'
import './style/contactus.css'
import './style/footer.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
