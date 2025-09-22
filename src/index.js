import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/css/fancybox.min.css'
import './assets/css/slick.css'
import './assets/css/slick-theme.css'
import './assets/css/aos.css'
import './assets/css/jquery.mCustomScrollbar.min.css'
import './assets/css/header.css'
import './assets/css/main.css'
import './assets/css/footer.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const container = document.getElementById('web-root');
const root = createRoot(container);
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);