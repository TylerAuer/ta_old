import { ReactNode } from 'react';
import { Heading } from './Heading';
import { ElementProps, HeadingLevelsType } from '@/types';
import { css } from '@emotion/react';

const containerCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

type HeadingRowProps = {
  title: string;
  level?: HeadingLevelsType;
  rightNode?: ReactNode;
} & ElementProps;

export function HeadingRow({
  title,
  level = 2,
  rightNode,
  id,
  className,
  dataTestId,
}: HeadingRowProps) {
  return (
    <div data-testid={dataTestId} css={containerCss} id={id} className={className}>
      <Heading level={level}>{title}</Heading>
      {rightNode}
    </div>
  );
}
