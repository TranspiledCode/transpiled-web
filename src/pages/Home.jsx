// src/App.js
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import SampleHeader from 'components/SampleHeader';
import ContactSection from '../components/ContactSection';
import Card from '../components/Card';
import styled from '@emotion/styled';

const TestArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
    padding: 6rem;
  }
`;

const Home = () => {
  return (
    <>
      <SampleHeader />
      <Hero />

      <TestArea>
        <Card
          CardImage="https://images.unsplash.com/photo-1726137570078-1faa70beb6ad?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ImageLabel="test image"
          CardHeading="test1"
          CardDescription="We build responsive, scalable websites with clean, future-proof code, optimized for performance and built to grow with your business."
        />
        <Card
          CardImage="https://images.unsplash.com/photo-1726137570078-1faa70beb6ad?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ImageLabel="test image"
          CardHeading="test2"
          CardDescription="Native and cross-platform mobile apps designed for performance and user satisfaction, ensuring smooth navigation and fast load times."
        />
        <Card
          CardImage="https://images.unsplash.com/photo-1726137570078-1faa70beb6ad?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ImageLabel="test image"
          CardHeading="test3"
          CardDescription="Optimized, secure e-commerce platforms designed to convert visitors into customers while delivering a smooth shopping experience."
        />
      </TestArea>

      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
