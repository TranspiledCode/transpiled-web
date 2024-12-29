import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import PropTypes from 'prop-types';
import useContent from 'hooks/useContent';

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
`;
const Subtitle = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;

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
  ${({ theme }) => theme.mediaQueries.md} {
    gap: 2rem;
  }
`;
const QuoteBody = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  flex: 1;
`;
const QuoteName = styled.p`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 700;
  font-size: 1.6rem;
  text-align: right;
`;
const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const ShimmerBlock = styled.div`
  animation: ${shimmer} 2s infinite linear;
  background: linear-gradient(to right, #f6f7f8 4%, #edeef1 25%, #f6f7f8 36%);
  background-size: 1000px 100%;
  border-radius: 4px;
`;

const SkeletonQuoteBlock = styled(ShimmerBlock)`
  height: 200px;
  width: 100%;
  margin-bottom: 16px;
`;

const SkeletonAuthor = styled(ShimmerBlock)`
  height: 24px;
  width: 150px;
  margin-left: auto;
`;

const SkeletonQuoteArea = styled(QuoteArea)`
  opacity: 0.7;
`;

const SkeletonTitle = styled(ShimmerBlock)`
  height: 64px;
  width: 300px;
  margin-bottom: 16px;
`;

const SkeletonSubtitle = styled(ShimmerBlock)`
  height: 24px;
  width: 80%;
`;

const LoadingState = () => (
  <Container>
    <SectionInfo>
      <SkeletonTitle />
      <SkeletonSubtitle />
    </SectionInfo>
    <SkeletonQuoteArea>
      {[1, 2, 3].map((index) => (
        <QuoteBlock key={index}>
          <SkeletonQuoteBlock />
          <SkeletonAuthor />
        </QuoteBlock>
      ))}
    </SkeletonQuoteArea>
  </Container>
);

const TestimonialsSection = () => {
  const { entries, loading, error } = useContent('testimonials', 'entries');

  if (loading) return <LoadingState />;
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

  return (
    <Container>
      <SectionInfo>
        <Title>TESTIMONIALS</Title>
        <Subtitle>What Our Clients Say About Working with Transpiled</Subtitle>
      </SectionInfo>
      <QuoteArea>
        {testimonials.map((testimonial) => (
          <QuoteBlock key={testimonial.id}>
            <QuoteBody>{testimonial.message}</QuoteBody>
            <QuoteName>{testimonial.author}</QuoteName>
          </QuoteBlock>
        ))}
      </QuoteArea>
    </Container>
  );
};

export default TestimonialsSection;

TestimonialsSection.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      dateCreated: PropTypes.object.isRequired,
      dateUpdated: PropTypes.object.isRequired,
      updatedBy: PropTypes.string.isRequired,
    }),
  ),
};
