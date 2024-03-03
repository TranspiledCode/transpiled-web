const companyName = 'Transpiled';
const companyLink = 'https://transpiled.com';
const phoneNumber = '1-800-555-5555';
const email = '6iJvq@example.com';

const gqlEndpoint = 'https://0267avkpvi.execute-api.us-west-2.amazonaws.com/';
const gqlDevEndpoint = 'http://localhost:4000/';

const baseImgURL = 'https://transpiled.s3.us-west-2.amazonaws.com/assets/img/';

const siteImages = {
  headerLogo: `${baseImgURL}logo-colored/m.webp`,
  backgroundImage: `${baseImgURL}AltBannerImage/l.webp`,
  logoOverlayImage: `${baseImgURL}leftSideLogo/l.webp`,
  bytesBackground: `${baseImgURL}bytesBackground/m.webp`,
  logoSquares: `${baseImgURL}logoSquares/s.webp`,
  webDevIcon: `${baseImgURL}webDevIcon/s.webp`,
  mobileAppIcon: `${baseImgURL}mobileAppIcon/s.webp`,
  tutorialsIcon: `${baseImgURL}tutorialsIcon/s.webp`,
  profile: `${baseImgURL}profile/t.webp`,
};

export {
  companyName,
  companyLink,
  phoneNumber,
  email,
  gqlEndpoint,
  gqlDevEndpoint,
  siteImages,
};
