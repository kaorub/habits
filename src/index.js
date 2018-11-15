import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import HabitsApp from './containers/HabitsApp';
import { store } from './store/configureStore';

import registerServiceWorker from './registerServiceWorker'


render(<Provider store={store}>
          <HabitsApp />
        </Provider>, document.getElementById('root'));

registerServiceWorker()
