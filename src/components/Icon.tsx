import { SerializedStyles } from '@emotion/react';
import calculator from '../img/icons/009-calculator.svg';
import football from '../img/icons/010-american-football.svg';
import fruit from '../img/icons/014-fruit.svg';
import mountains from '../img/icons/013-mountains.svg';
import code from '../img/icons/015-coding.svg';

type Props = {
  icon: 'calculator' | 'football' | 'fruit' | 'mountains' | 'code';
  sx?: SerializedStyles;
};

export const Icon: React.FC<Props> = ({ sx, icon }) => {
  const src = {
    calculator,
    football,
    fruit,
    mountains,
    code,
  };

  return <img css={sx} src={src[icon]} alt={icon} />;
};
