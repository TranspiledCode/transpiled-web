import styled from '@emotion/styled';
import { flexCenter } from '../utils/css';

const ServicesSection = styled.div`
  ${flexCenter('column')}
  gap: 2rem;
  height: 800px;
  background-color: ${({ theme }) => theme.background};
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 5rem;
  font-weight: 500;
`;
const SubHeading = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
`;

const Services = () => (
  <ServicesSection id='services'>
    <Heading>What We Do</Heading>
    <SubHeading>
      We help you to grow your business by <br />
      providing you with the best solutions.
    </SubHeading>
    <div>slider</div>
  </ServicesSection>
);

export default Services;
