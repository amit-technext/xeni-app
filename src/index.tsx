import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Main from './Main';
import 'helpers/initFA';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Main>
        <App />
      </Main>
    </React.StrictMode>
  </Provider>,
  document.getElementById('xeniapp-client'),
);
