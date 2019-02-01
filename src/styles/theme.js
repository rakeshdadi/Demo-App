import * as animation from './animation';

export const color = {
  black: '#000000',
  gray: '#7a7a7a',
  grayLight: '#e5e7e8',
  grayXLight: '#f3f4f4',
  white: '#ffffff',
  blue: '#026be6',
  blueLight: '#f2f8ff',
  blueText: '#026be6',
  blueHover: '#0057AF',
  green: '#00b975',
  greenLight: '#edfff8',
  yellow: '#eeaf1c',
  yellowLight: '#fff9eb',
  red: '#e94c55',
  redLight: '#fff3f4',
};


export const text = {
  body: {
    size: '1.4rem',
    weight: '400',
  },
  h1: {
    margin: '.8rem 0 3.2rem 0',
    size: '2.0rem',
    weight: '600',
  },
  h2: {
    size: '1.8rem',
    weight: '500',
  },
  h3: {
    size: '1.6rem',
    weight: '600',
  },
  h4: {
    size: '1.6rem',
    weight: '400',
  },
  h5: {
    size: '1.4rem',
    weight: '600',
  },
  h6: {
    size: '1.2rem',
    weight: '500',
  },
  columnHeader: {
    size: '1.2rem',
    weight: '500',
  },
  span: {
    size: '1.4rem',
    weight: '400',
    color: color.black,
  },
  p: {
    size: '1.4rem',
    weight: '400',
    color: color.black,
  },
  label: {
    size: '1.4rem',
    weight: '400',
    color: color.gray,
  },
  fieldLabel: {
    size: '1.2rem',
    weight: '400',
    color: color.black,
  },
  link: {
    size: '1.4rem',
    weight: '400',
    color: color.blue,
  },
  button: {
    size: '1.4rem',
    weight: '500',
    color: color.blue,
  },
};

export default {
  color,
  text,
  animation,
};
