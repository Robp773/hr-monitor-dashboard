import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

ReactDOM.render(
    <Provider store={store}>
            <div>    
                <App />
                <Alert stack={{limit: 3}} />
            </div>
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
