import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';

const PageWrapper = styled.section`
  ${({ theme }) => theme.mixins.flexColCenter};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  gap: 4rem;
`;
const TitleWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColCenter};
`;
const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 8rem;
  line-height: 0.95em;
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;
const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: 2rem;
  text-align: justify;
  line-height: 1.4em;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`;

const Services = () => {
  return (
    <PageWrapper>
      <TitleWrapper>
        <Title>404</Title>
        <Subtitle>Page Not Found</Subtitle>
      </TitleWrapper>
      <Link to="/">
        <Button variant="outline" size="medium" icon="FaHome">
          Return to Home
        </Button>
      </Link>
    </PageWrapper>
  );
};

export default Services;
