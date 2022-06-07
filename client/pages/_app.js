import { Provider } from 'react-redux';
import { useStore } from '../store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../styles/theme';

import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/*<AnimatePresence exitBeforeEnter>*/}

          <Component {...pageProps} />

        {/*</AnimatePresence>*/}
      </ThemeProvider>
    </Provider>
  );
}