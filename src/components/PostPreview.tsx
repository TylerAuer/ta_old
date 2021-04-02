import { css } from '@emotion/react';
import { SPACING } from '@/constants';
import { Chip } from '@/components/Chip';

export const PostPreview = ({ post }) => {
  const { title, subtitle, category, tags, location } = post.frontmatter;
  const { blog, path } = post.fields;

  const titleSubtitleContainer = css``;

  const titleCss = css`
    font-style: normal;
    font-weight: bold;
    margin: 0;
    width: auto;
  `;

  const subtitleCss = css`
    font-size: 1.6rem;
    font-style: italic;
  `;

  const categoryCss = css`
    font-family: var(--font-special);
    color: var(--color-punch);
    font-size: 1.6rem;
    text-align: left;
  `;

  return (
    <article
      css={css`
        margin: ${SPACING.xl} 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <div css={titleSubtitleContainer}>
        <h4 css={titleCss}>{title}</h4>
        <div css={subtitleCss}>{subtitle}</div>
        {!!tags.length && (
          <div>
            {tags.map((tag) => (
              <Chip to={`/${blog}/tag/${tag.toLowerCase()}`}>{tag}</Chip>
            ))}
          </div>
        )}
      </div>
      <div css={categoryCss}>{category}</div>
    </article>
  );
};
