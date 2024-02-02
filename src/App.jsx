import { ThemeProvider, ScrollToTop } from '@transpiled/ui';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import transpiledTheme from './styles/theme';
import HomePage from './pages/Home';
import Article from './pages/Article';

const App = () => (
  <ThemeProvider externalTheme={transpiledTheme}>
    <ScrollToTop />
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/article/:id' element={<Article />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
