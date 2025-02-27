import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import store from './state/store';
import AppRoutes from './routes/AppRoutes.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// <Provider store={store}>
//   <AppRoutes />
// </Provider>
// <ErrorBoundary>
// </ErrorBoundary>
