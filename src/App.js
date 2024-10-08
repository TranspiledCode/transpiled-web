import { ThemeProvider } from '@emotion/react';
import theme from './style/theme';
import { GlobalProvider } from './context/GlobalContext';
import Home from './pages/Home';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  </ThemeProvider>
);

export default App;
