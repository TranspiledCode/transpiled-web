import Home from 'pages/Home.jsx';
import ContextProvider from 'context/GlobalProvider';
import { ThemeProvider } from '@emotion/react';
import theme from 'style/theme';

const App = () => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;
