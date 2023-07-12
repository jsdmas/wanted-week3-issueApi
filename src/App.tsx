import { Global } from '@emotion/react';
import { Provider } from 'react-redux';

import Router from './Router';
import store from './store';
import { resetCss } from './styles/globalStyle';

function App() {
  return (
    <Provider store={store}>
      <Global styles={resetCss} />
      <Router />
    </Provider>
  );
}
export default App;
