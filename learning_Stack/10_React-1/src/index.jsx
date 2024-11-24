// Import React
import React from 'react';
// Import ReactDOM
import ReactDOM from 'react-dom/client';
import MyApp, { x, message } from './App.jsx';
import './styles.css';

// Select the root element
const el = document.querySelector('#root');
// Tell react to take control of it
const root = ReactDOM.createRoot(el);

root.render(<MyApp />);
