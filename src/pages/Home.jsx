import Home from '../sections/Home';
import Services from '../sections/Services';
import Bytes from '../sections/Bytes';
import About from '../sections/About';
import Articles from '../sections/Articles';
import Footer from '../sections/Footer';

const HomePage = () => (
  <>
    <Home id='home' />
    <Services id='services' />
    <Bytes id='bytes' />
    <Articles id='articles' />
    <About id='about' />
    <Footer id='footer' />
  </>
);

export default HomePage;
