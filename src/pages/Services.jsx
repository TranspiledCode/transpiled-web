import SampleHeader from 'organisms/SampleHeader';
import ServicesMain from 'organisms/ServicesMain';
import ServiceBuild from 'organisms/ServiceBuild';
import WebDev from 'organisms/WebDev';
import WebAppDev from 'organisms/WebAppDev';
import Footer from 'organisms/Footer';

const ServicesPage = () => {
  return (
    <>
      <SampleHeader />
      <ServicesMain />
      <WebDev />
      <WebAppDev />
      <ServiceBuild />

      <Footer />
    </>
  );
};
export default ServicesPage;
