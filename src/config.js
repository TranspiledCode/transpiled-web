const companyName = 'Transpiled';
const companyLink = 'https://transpiled.com';
const phoneNumber = '(458) 256 - 9363';
const email = 'hello@transpiled.com';
const socialLinks = {
  facebook: 'https://www.facebook.com/transpiled',
  twitter: 'https://twitter.com/transpiled',
  linkedin: 'https://www.linkedin.com/company/transpiled',
};

const gqlEndpoint = 'https://0267avkpvi.execute-api.us-west-2.amazonaws.com/';
const gqlDevEndpoint = 'http://localhost:3000/';

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
  socialLinks,
};
