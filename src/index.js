import React from 'react';
import {render} from 'react-dom';

import {AppContainer} from 'react-hot-loader';

import * as serviceWorker from './serviceWorker';

import Qbs from './app';

const renderApp = Component => {
   render(
      <AppContainer>
         <Component/>
      </AppContainer>,
      document.getElementById('root')
   );
};

renderApp(Qbs);

if (module.hot) {
   module.hot.accept(() => renderApp(Qbs));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
