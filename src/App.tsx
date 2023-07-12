import { Global } from '@emotion/react';

import Router from './Router';
import { resetCss } from './styles/globalStyle';

function App() {
  return (
    <>
      <Global styles={resetCss} />
      <Router />
    </>
  );
}
export default App;
