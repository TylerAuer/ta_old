import { SerializedStyles } from '@emotion/react';

import calculator from '../img/icons/009-calculator.svg';
import code from '../img/icons/015-coding.svg';
import football from '../img/icons/010-american-football.svg';
import fruit from '../img/icons/014-fruit.svg';
import github from '../img/icons/005-github.svg';
import mountains from '../img/icons/013-mountains.svg';
import twitter from '../img/icons/003-twitter.svg';

type Props = {
  icon: 'calculator' | 'code' | 'football' | 'fruit' | 'github' | 'mountains' | 'twitter';
  sx?: SerializedStyles;
};

export const Icon: React.FC<Props> = ({ sx, icon }) => {
  const src = {
    calculator,
    code,
    football,
    fruit,
    github,
    mountains,
    twitter,
  };

  return <img css={sx} src={src[icon]} alt={icon} />;
};
