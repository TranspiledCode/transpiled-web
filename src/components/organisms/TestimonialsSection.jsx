// TestimonialsSection.jsx (simplified)
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import useContent from 'hooks/useContent';
import Shimmer from 'atoms/Shimmer';
import EditableContent from 'organisms/EditableContent';

const Container = styled.section`
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  gap: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 4rem;
  }
`;

const SectionInfo = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.fuchsia};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 700;
  font-size: clamp(5rem, 8vw, 6.4rem);
  line-height: clamp(5rem, 8vw, 6.4rem);
  letter-spacing: -2px;
  min-height: 64px;
`;

const Subtitle = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  min-height: 24px;
  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(60rem, 100%, 70rem);
    text-align: left;
  }
`;

const QuoteArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`;

const QuoteBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${({ theme }) => theme.mediaQueries.md} {
    gap: 2rem;
  }
`;

const QuoteBody = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  flex: 1;
  min-height: 200px;
`;

const QuoteName = styled.div`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 700;
  font-size: 1.6rem;
  text-align: right;
  min-height: 24px;
`;

const TestimonialsSection = () => {
  const { entries, loading, error } = useContent('testimonials', 'entries');

  if (error) return <div>Error loading testimonials</div>;

  const testimonials = entries
    ? Object.entries(entries)
        .map(([id, entry]) => ({
          id,
          message: `"${entry.content.text}"`,
          author: `— ${entry.author.name}, ${entry.author.title} at ${entry.author.company}`,
          dateCreated: entry.metadata.createdAt,
          dateUpdated: entry.metadata.updatedAt,
          updatedBy: entry.metadata.updatedBy,
        }))
        .sort((a, b) => a.dateCreated - b.dateCreated)
    : [];

  const placeholderTestimonials = loading ? [1, 2, 3] : testimonials;

  return (
    <Container>
      <SectionInfo>
        <Title>TESTIMONIALS</Title>
        <Subtitle>What Our Clients Say About Working with Transpiled</Subtitle>
      </SectionInfo>
      <QuoteArea>
        {!loading &&
          placeholderTestimonials.map((testimonial) => (
            <QuoteBlock key={testimonial.id}>
              <EditableContent
                documentId={testimonial.id}
                contentType="testimonial"
              >
                <QuoteBody>
                  {loading ? (
                    <Shimmer lines={5} gap={15} />
                  ) : (
                    testimonial.message
                  )}
                </QuoteBody>
              </EditableContent>
              <QuoteName>
                {loading ? <Shimmer /> : testimonial.author}
              </QuoteName>
            </QuoteBlock>
          ))}
      </QuoteArea>
    </Container>
  );
};

TestimonialsSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleColor: PropTypes.string,
  subtitleColor: PropTypes.string,
  stMaxWidth: PropTypes.number,
};

export default TestimonialsSection;
