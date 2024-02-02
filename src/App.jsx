import { ThemeProvider, ScrollToTop } from '@transpiled/ui';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import transpiledTheme from './styles/theme';

import Home from './sections/Home';
import Services from './sections/Services';
import Bytes from './sections/Bytes';
import About from './sections/About';
import Articles from './sections/Articles';
import Footer from './sections/Footer';
import Article from './pages/Article';

const HomePage = () => (
  <>
    <ScrollToTop />
    <Home id='home' />
    <Services id='services' />
    <Bytes id='bytes' />
    <Articles id='articles' />
    <About id='about' />
    <Footer id='footer' />
  </>
);

const App = () => (
  <ThemeProvider externalTheme={transpiledTheme}>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/article/:id' element={<Article />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
