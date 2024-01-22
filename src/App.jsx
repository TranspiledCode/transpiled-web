// Import your components for each section
import Home from './sections/Home';
import Services from './sections/Services';
import Bytes from './sections/Bytes';
import About from './sections/About';
import Articles from './sections/Articles';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './styles/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
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
