import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import SEO from '../components/templates/SEO';
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

const NotFound = () => {
  const description =
    'The page you are looking for does not exist. Please return to the home page or explore other sections of the site.';

  return (
    <>
      <SEO
        title="404 - Page Not Found"
        canonical="/404"
        description={description}
        noindex={true}
      />
      <PageWrapper>
        <TitleWrapper>
          <Title>404</Title>
          <Subtitle>Page Not Found</Subtitle>
        </TitleWrapper>
        <Link to="/" aria-label="Return to Home">
          <Button variant="outline" size="medium" icon="FaHome">
            Return to Home
          </Button>
        </Link>
      </PageWrapper>
    </>
  );
};

export default NotFound;
