import React from 'react';
import Lottie from 'lottie-react';
import musicalAnimation from './musical_animation.json';

import './styles.scss';

const Loading = () => (
  <Lottie animationData={musicalAnimation} className="loading" />
);

export default Loading;
