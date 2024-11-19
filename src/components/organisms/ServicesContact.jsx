import styled from '@emotion/styled';
import Button from '../atoms/Button';

const SectionContainer = styled.section``;
const ContentContainer = styled.div``;
const Title = styled.h3``;
const Subtitle = styled.p``;

const ServicesContact = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Title>READY TO BUILD?</Title>
        <Subtitle>
          From websites and apps to custom solutions, we’re here to bring your
          ideas to life. Let’s create something extraordinary together.
        </Subtitle>
        <Button icon="FaArrowRight" variant="outline" size="medium">
          Contact Us
        </Button>
      </ContentContainer>
    </SectionContainer>
  );
};
export default ServicesContact;
