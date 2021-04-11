import { SerializedStyles } from '@emotion/react';
import calculator from '../img/icons/009-calculator.svg';
import football from '../img/icons/010-american-football.svg';
import fruit from '../img/icons/014-fruit.svg';

type Props = {
  sx?: SerializedStyles;
};

export const CalculatorIcon = ({ sx }: Props) => <img css={sx} src={calculator} />;

export const FootballIcon = ({ sx }: Props) => <img css={sx} src={football} />;

export const FruitIcon = ({ sx }: Props) => <img css={sx} src={fruit} />;
