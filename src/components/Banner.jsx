import React from 'react';
import styled from '@emotion/styled';

const BannerContainer = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  z-index: 100;
  @media (min-width: 768px) {
    margin-left: 50px;
  }
`;

const BannerText = styled.h1`
  margin-top: 40px;
  font-size: 4rem;
  line-height: 1.2;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Web = styled.span`
  color: ${(props) => props.theme.primaryColor};
`;

const MobileApp = styled.span`
  color: ${(props) => props.theme.secondaryColor};
`;

const Message = styled.p`
  font-size: 1.8rem;
  color: #fff;
  font-weight: bold;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Banner = () => (
  <BannerContainer>
    <BannerText>
      <Web>Web</Web> and <br />
      <MobileApp>Mobile App</MobileApp> <br /> Development
    </BannerText>
    <Message>
      We build modern, responsive and <br />
      scalable web and mobile applications
    </Message>
  </BannerContainer>
);

export default Banner;
