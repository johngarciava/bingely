import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch, faTimes, faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faSearch, faTimes, faArrowLeft, faSpinner);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
