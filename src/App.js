import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Routes />
                    <GlobalStyle />
                </Router>
                <ToastContainer autoClose={3000} />
            </PersistGate>
        </Provider>
    );
}

export default App;
