import { ThemeProvider } from '@transpiled/ui';
import { ScrollToTop } from '@transpiled/ui';
import Home from './sections/Home';
import Services from './sections/Services';
import Bytes from './sections/Bytes';
import About from './sections/About';
import Articles from './sections/Articles';
import Footer from './sections/Footer';
import transpiledTheme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider externalTheme={transpiledTheme}>
      <ScrollToTop />
      <Home id='home' />
      <Services id='services' />
      <Bytes id='bytes' />
      <About id='about' />
      <Articles id='articles' />
      <Footer id='footer' />
    </ThemeProvider>
  );
};

export default App;
