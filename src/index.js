import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalTheme } from './components';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

let fontTheme = createTheme();
fontTheme = responsiveFontSizes(fontTheme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={GlobalTheme}>
      <ThemeProvider theme={fontTheme}>
        <App />
      </ThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
