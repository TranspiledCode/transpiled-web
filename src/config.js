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
      'https://transpiled.s3.us-west-2.amazonaws.com/assets/img/NVMFishCover/s.webp',
    url: 'https://transpiled.s3.us-west-2.amazonaws.com/assets/video/nvmMacFish.mp4',
  },
];

const baseImgURL = 'https://transpiled.s3.us-west-2.amazonaws.com/assets/img/';

const siteImages = {
  headerLogo: `${baseImgURL}logo-colored/m.webp`,
  backgroundImage: `${baseImgURL}AltBannerImage/l.webp`,
  logoOverlayImage: `${baseImgURL}leftSideLogoTransparent/m.webp`,
  bytesBackground: `${baseImgURL}bytesBackground/m.webp`,
  logoSquares: `${baseImgURL}logoSquares/s.webp`,
  webDevIcon: `${baseImgURL}webDevIcon/s.webp`,
  mobileAppIcon: `${baseImgURL}mobileAppIcon/s.webp`,
  tutorialsIcon: `${baseImgURL}tutorialsIcon/s.webp`,
  profile: `${baseImgURL}profile/t.webp`,
};

export { videos, companyName, gqlEndpoint, gqlDevEndpoint, siteImages };
