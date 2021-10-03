import { css } from '@emotion/react';
import { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Box } from '@/elements/Box';

type Props = {
  photoList: any;
};

export const Slideshow: React.FC<Props> = ({ photoList }) => {
  const [pixIdx, setPicIdx] = useState(0);

  const getInRangeIndex = (idx: number) => {
    const len = photoList.length;
    if (idx >= 0 && idx < len) return idx;
    else if (idx < 0) return idx + len;
    else return idx % len;
  };

  const arrowColorAndSize = '5rem solid rgba(255, 255, 255, 0.3)';
  const arrowPadding = '2rem';

  const s = css`
    figure {
      position: relative;
    }
    .pic-container {
      position: relative;
      width: 100%;
    }
    .gatsby-image-wrapper {
      transition: none;
      opacity: 1;
    }
    .arrow {
      position: absolute;
      z-index: 2;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-top: 5rem solid transparent;
      border-bottom: 5rem solid transparent;
    }
    .click-area {
      height: 90%;
      width: 30%;
      position: absolute;
      top: 5%;
      z-index: 1;
      cursor: pointer;
    }

    .left-click-area {
      left: 0;
    }
    .left-arrow {
      left: ${arrowPadding};
      border-right: ${arrowColorAndSize};
    }
    .right-click-area {
      right: 0;
    }
    .right-arrow {
      right: ${arrowPadding};
      border-left: ${arrowColorAndSize};
    }
    figure {
      transition: none;
      transition-duration: 0;
    }
  `;

  return (
    <Box css={s} width="wide">
      <figure>
        <div className="pic-container">
          <GatsbyImage
            key={photoList[pixIdx].node.name}
            image={getImage(photoList[pixIdx].node)}
            alt={photoList[pixIdx].node.name}
          />
          <div
            className="left-click-area click-area"
            onClick={() => {
              setPicIdx((prev) => getInRangeIndex(prev - 1));
            }}
          >
            <div className="left-arrow arrow" />
          </div>
          <div
            className="right-click-area click-area"
            onClick={() => setPicIdx((prev) => getInRangeIndex(prev + 1))}
          >
            <div className="right-arrow arrow" />
          </div>
        </div>
        <figcaption>{photoList[pixIdx].caption || ''}</figcaption>
      </figure>
    </Box>
  );
};
