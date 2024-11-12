import React from 'react';
import styled from '@emotion/styled';

const backImage = styled.div``;

const title = styled.div`
  display: flex;
  text-align: left;
  font-family: poppins;
  font-size: 64px;
  font-weight: bold;
  color: #7fff43;
  padding: 10px;
`;
const subject = styled.div`
  display: flex;
  text-align: left;
  font-family: manrope;
  font-size: 24px;
  color: #f8f8f8;
`;
const BoxTitle = styled.div``;
const BoxInfo = styled.div``;

const LearnMore = styled.div``;

<>
  // imgsrc code below is incorrect //
  <backImage imgsrc="#" alt="photo of highway"></backImage>
  <title>Why Choose Us?</title>
  <subject>Your Partner in Digital Innovation</subject>
  <BoxTitle>Industry Expertise</BoxTitle>
  <BoxInfo>
    With a diverse portfolio, we bring specialized insights that help each
    client acheive their unique goals
  </BoxInfo>
  <BoxTitle>Agile, Interative Process</BoxTitle>
  <BoxInfo>
    Our flexible, client-focused process keep projects efficient and aligned
    with your evolving needs.
  </BoxInfo>
  <BoxTitle>Quality & Performance</BoxTitle>
  <BoxInfo>
    We build with the future in mind, using top tech and best practices for a
    lasting, scalable solution
  </BoxInfo>
  <BoxTitle>Transparency</BoxTitle>
  <BoxInfo>
    From project updates to pricing, we ensure clarity, so you're always in the
    loop-no hidden costs.
  </BoxInfo>
</>;

export default Why;
