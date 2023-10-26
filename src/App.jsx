// Import your components for each section
import Home from './components/Home';
import Services from './components/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './styles/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Header />
      <Home id='home' />
      <Services id='services' />
      <Footer id='footer' />
    </ThemeProvider>
  );
}

export default App;
