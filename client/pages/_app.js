import { Provider } from 'react-redux';
import { useStore } from '../store';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#061121',
    },
    secondary: {
      main: '#1199FA',
    },
    background: {
      default: '#111111',
      paper: '#151718',
    },
    error: {
      main: '#E64B60',
    },
    warning: {
      main: '#F86315',
    },
    info: {
      main: '#A141DC',
    },
    success: {
      main: '#098551',
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
});

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </Provider>
  );
}
