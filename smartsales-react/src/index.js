import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faUserTie } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 library.add(fas, fab);

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>
 );

reportWebVitals();






// // In src/index.js TEMPORARILY replace everything with:
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div style={{backgroundColor: 'red', padding: '20px'}}>
//     <h1 style={{color: 'white'}}>EMERGENCY TEST</h1>
//     <p>If you see this, React is mounting correctly</p>
//   </div>
// );