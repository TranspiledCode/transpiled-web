// mixins.js
import fonts from './fonts';

const mixins = {
  flexColCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textH1: {
    fontFamily: fonts.poppins,
    fontSize: 'clamp(5.8rem, 5vw, 9.6rem)',
    fontWeight: 700,
    lineHeight: '0.8em',
    letterSpacing: '-0.04em',
    textTransform: 'uppercase',
  },
  textH2: {
    fontFamily: fonts.poppins,
    fontSize: 'clamp(4.8rem, 5vw, 6.4rem)',
    fontWeight: 700,
    lineHeight: '1em',
    letterSpacing: '-0.04em',
    textTransform: 'uppercase',
  },
  textH3: {
    fontFamily: fonts.manrope,
    fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
    fontWeight: 700,
    lineHeight: '1.4em',
    letterSpacing: '-0.02em',
  },
  textSubtitle: {
    fontFamily: fonts.manrope,
    fontSize: 'clamp(2rem, 1.5vw, 3.6rem)',
    fontWeight: 500,
    lineHeight: '1.2em',
    letterSpacing: '-0.02em',
  },
  textBody: {
    fontFamily: fonts.manrope,
    fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
    fontWeight: 400,
    lineHeight: '1.4em',
    letterSpacing: '-0.01em',
  },
  textBodySm: {
    fontFamily: fonts.manrope,
    fontSize: 'clamp(1.4rem, 1vw, 1.6rem)',
    fontWeight: 400,
    lineHeight: '1.4em',
  },
  textMono: {
    fontFamily: fonts.mono,
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: '1.4em',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
  },
  textNav: {},
};

export default mixins;
