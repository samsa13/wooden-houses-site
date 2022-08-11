import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import App from './app/App';
import { store } from './store';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>{/*пока не используется */}
    <Provider store={store}>
      <BreakpointProvider>
      <App />
      </BreakpointProvider>
    </Provider>
  </BrowserRouter>
);

