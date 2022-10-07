import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './style/theme';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

