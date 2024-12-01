import SampleHeader from 'organisms/SampleHeader';
import ServicesMain from 'organisms/ServicesMain';
import ServiceBuild from 'organisms/ServiceBuild';
import WebDev from 'organisms/WebDev';
import Footer from 'organisms/Footer';

const ServicesPage = () => {
  return (
    <>
      <SampleHeader />
      <ServicesMain />
      <WebDev />
      <ServiceBuild />

      <Footer />
    </>
  );
};
export default ServicesPage;
