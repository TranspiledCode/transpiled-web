const companyName = 'Transpiled';

const gqlEndpoint = 'https://0267avkpvi.execute-api.us-west-2.amazonaws.com/';
const gqlDevEndpoint = 'http://localhost:4000/';

const videos = [
  {
    id: 'ymCR4tIWZu8',
    title: 'NVM on Mac for Fish Shell',
    author: 'Joshua Crass',
    description:
      'Step-by-step guide to get nvm and Fish Shell to play nicely on your Mac.',
    thumbnail:
      'https://transpiled.s3.us-west-2.amazonaws.com/assets/img/nvmFish/m.webp',
    url: 'https://transpiled.s3.us-west-2.amazonaws.com/assets/video/nvmMacFish.mp4',
  },
];

const siteImages = {
  headerLogo:
    'https://transpiled.s3.amazonaws.com/assets/img/logo-colored/m.webp',
  backgroundImage:
    'https://transpiled.s3.amazonaws.com/assets/img/AltBannerImage/l.webp',
  logoOverlayImage:
    'https://transpiled.s3.amazonaws.com/assets/img/leftSideLogoTransparent/m.webp',
};

export { videos, companyName, gqlEndpoint, gqlDevEndpoint, siteImages };
