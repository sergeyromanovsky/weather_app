import React from 'react';
import './style.scss';
import ReactDOM from 'react-dom';
import App from './pages';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
