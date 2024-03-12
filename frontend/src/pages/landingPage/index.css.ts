import { style } from '@vanilla-extract/css';

export const landingWrapper = style({
  width: '100%',
  height: '100%',
  margin: 'auto',
  backgroundImage:
    'url(/public/images/landing-background-animation-h490w950.gif)',
  backgroundSize: 'cover',
});

export const etcWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  marginTop: 'auto',
});

export const buttonWrapper = style({
  display: 'flex',
  width: '40%',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export const guestButton = style({
  backgroundColor: 'grey',
  color: 'white',
  margin: '0px 10px 15px 10px',
  height: '100%',
  borderRadius: '4px',
  fontSize: '24px',
  fontWeight: 'bold',
});

export const logInButton = style({
  backgroundColor: 'deeppink',
  color: 'white',
  margin: '0px 10px 15px 10px',
  height: '100%',
  borderRadius: '4px',
  fontSize: '24px',
  fontWeight: 'bold',
});

export const clickText = style({
  fontSize: '16pt',
  fontWeight: 'bold',
  color: 'grey',
  textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white',
});
