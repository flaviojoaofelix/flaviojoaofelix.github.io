import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp as App } from './App';
import './styles/default.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
