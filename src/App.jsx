import { ThemeProvider, ScrollToTop } from '@transpiled/ui';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/apolloClient';

import transpiledTheme from './styles/theme';
import HomePage from './pages/Home';
import Article from './pages/Article';
import Tutorial from './pages/Tutorial';

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider externalTheme={transpiledTheme}>
      <ScrollToTop />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/article/:id' element={<Article />} />
          <Route path='/tutorial' element={<Tutorial />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
