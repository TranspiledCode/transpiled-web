import styled from '@emotion/styled';
import { flexCenter } from '../utils/css';
import webDevIcon from '../assets/images/webDevIcon.png';
import tutorialsIcon from '../assets/images/tutorialsIcon.png';
import mobileAppIcon from '../assets/images/mobileAppIcon.png';
import Icon from '../components/Icon';

const ServicesSection = styled.div`
  ${flexCenter('column')}
  gap: 2rem;
  height: 500px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  overflow: hidden;
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

const ServicesContainer = styled.div`
  ${flexCenter('row')}
  min-height: 300px;
  gap: 10rem;
`;

const ServiceBox = styled.div`
  ${flexCenter('column')}
  justify-content: space-between;
  width: 190px;
  height: auto;
  gap: 1.5rem;
`;

const ServiceIcon = styled.div`
  ${flexCenter('row')}
  width: 80px;
  img {
    max-height: 65px;
  }
`;

const ServiceTitle = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;

const ServiceDescription = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
`;

const ServiceCircle = styled.div`
  position: absolute;
  width: 290px;
  height: 290px;
  border-radius: 50%;
  border: 3px solid;
  border-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0 0 5px 2px ${({ theme }) => theme.primaryColor};
`;

const MoreInfoButton = styled.button`
  background-color: ${({ theme }) => theme.neutral};
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  min-height: 35px;
  width: 35px;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 2;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }
`;

const Services = () => {
  const handleMoreClick = () => {
    console.log('More info clicked');
  };

  return (
    <ServicesSection id='services'>
      <Heading>What We Do</Heading>
      <SubHeading>
        We help you to grow your business by <br />
        providing you with the best solutions.
      </SubHeading>
      <ServicesContainer>
        <ServiceCircle />
        <ServiceBox>
          <ServiceIcon>
            <img src={webDevIcon} alt='web dev icon' />
          </ServiceIcon>
          <ServiceTitle>Web Development</ServiceTitle>
          <ServiceDescription>
            We provide the best web development services to help you grow your
            business.
          </ServiceDescription>
          <MoreInfoButton>
            <Icon
              onClick={handleMoreClick}
              iconName='arrowRight'
              iconType='solid'
            />
          </MoreInfoButton>
        </ServiceBox>
        <ServiceBox>
          <ServiceIcon>
            <img src={mobileAppIcon} alt='web dev icon' />
          </ServiceIcon>
          <ServiceTitle>Mobile Apps</ServiceTitle>
          <ServiceDescription>
            We provide the best mobile app development services to help you grow
            your business.
          </ServiceDescription>
          <MoreInfoButton>
            <Icon
              onClick={handleMoreClick}
              iconName='arrowRight'
              iconType='solid'
            />
          </MoreInfoButton>
        </ServiceBox>
        <ServiceBox>
          <ServiceIcon>
            <img src={tutorialsIcon} alt='web dev icon' />
          </ServiceIcon>
          <ServiceTitle>Tutorials</ServiceTitle>
          <ServiceDescription>
            We provide the best tutorials to help you grow your business.
          </ServiceDescription>
          <MoreInfoButton>
            <Icon
              onClick={handleMoreClick}
              iconName='arrowRight'
              iconType='solid'
            />
          </MoreInfoButton>
        </ServiceBox>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
