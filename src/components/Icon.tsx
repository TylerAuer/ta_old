import calculator from '../img/icons/009-calculator.svg';
import code from '../img/icons/015-coding.svg';
import football from '../img/icons/010-american-football.svg';
import fruit from '../img/icons/014-fruit.svg';
import github from '../img/icons/005-github.svg';
import mountains from '../img/icons/013-mountains.svg';
import twitter from '../img/icons/003-twitter.svg';

import { HtmlElementPropsType } from '@/types';

type Props = {
  icon: 'calculator' | 'code' | 'football' | 'fruit' | 'github' | 'mountains' | 'twitter';
} & HtmlElementPropsType;

export const Icon: React.FC<Props> = ({ sx, icon, id, className }) => {
  const src = {
    calculator,
    code,
    football,
    fruit,
    github,
    mountains,
    twitter,
  };

  return <img id={id} className={className} css={sx} src={src[icon]} alt={icon} />;
};
