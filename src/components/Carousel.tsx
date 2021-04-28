import { css } from '@emotion/react';
import { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Box } from '@/components/Box';

export type CarouselPhoto = {
  component: JSX.Element;
  caption?: string;
};

type Props = {
  photoList: CarouselPhoto[];
};

export const Carousel: React.FC<Props> = ({ photoList }) => {
  const [pixIdx, setPicIdx] = useState(0);

  const getInRangeIndex = (idx: number) => {
    const len = photoList.length;
    if (idx >= 0 && idx < len) return idx;
    else if (idx < 0) return idx + len;
    else return idx % len;
  };

  const arrowColorAndSize = '5rem solid rgba(255, 255, 255, 0.3)';
  const arrowPadding = '2rem';

  const arrowCss = css`
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 5rem solid transparent;
    border-bottom: 5rem solid transparent;
  `;
  const touchBoxCss = css`
    height: 90%;
    width: 30%;
    position: absolute;
    top: 5%;
    z-index: 1;
    cursor: pointer;
  `;

  return (
    <Box width="wide">
      <figure
        css={css`
          position: relative;
        `}
      >
        <div
          className="pic-container"
          css={css`
            position: relative;
          `}
        >
          {photoList[pixIdx].component}
          <div
            className="left-click-area"
            css={css`
              ${touchBoxCss}
              left: 0;
            `}
            onClick={() => {
              setPicIdx((prev) => getInRangeIndex(prev - 1));
            }}
          >
            <div
              className="left-arrow"
              css={css`
                ${arrowCss}
                left: ${arrowPadding};
                border-right: ${arrowColorAndSize};
              `}
            />
          </div>
          <div
            className="right-click-area"
            css={css`
              ${touchBoxCss}
              right: 0;
            `}
            onClick={() => {
              setPicIdx((prev) => getInRangeIndex(prev + 1));
            }}
          >
            <div
              className="right-arrow"
              css={css`
                ${arrowCss}
                right: ${arrowPadding};
                border-left: ${arrowColorAndSize};
              `}
            />
          </div>
        </div>
        <figcaption>{photoList[pixIdx].caption || ''}</figcaption>
      </figure>
    </Box>
  );
};
