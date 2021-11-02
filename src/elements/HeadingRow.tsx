import { ReactNode } from 'react';
import { Heading } from './Heading';
import { HeadingLevelsType } from '@/types';
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
};

export function HeadingRow({ title, level = 2, rightNode }: HeadingRowProps) {
  return (
    <div css={containerCss}>
      <Heading level={level}>{title}</Heading>
      {rightNode}
    </div>
  );
}
