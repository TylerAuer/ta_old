import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { SPACING } from '@/constants';
import { Chip } from '@/components/Chip';
import { Flex, FlexJustification } from '@/components/Flex';

export const PostPreview = ({ post, role }) => {
  const { title, subtitle, category, tags, location } = post.frontmatter;
  const { blog, path } = post.fields;

  const titleCss = css`
    font-style: normal;
    font-weight: bold;
    margin: 0 2rem 0 0;
    width: auto;

    &:hover {
      color: var(--color-punch);
    }
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
    border-color: transparent;

    &:hover {
      border-color: var(--color-punch);
      color: var(--color-punch-dark);
    }
  `;

  return (
    <article
      css={css`
        margin: ${SPACING.xl} 0;
      `}
      role={role}
    >
      <Flex
        sx={css`
          width: 100%;
        `}
        flex={FlexJustification.split}
        wrap={'wrap-reverse'}
      >
        <div>
          <Link to={path}>
            <h4 css={titleCss}>{title}</h4>
          </Link>
          <div css={subtitleCss}>{subtitle}</div>
          {!!tags.length && (
            <div>
              {tags.map((tag) => (
                <Chip to={`/${blog}/tag/${tag.toLowerCase()}`}>{tag}</Chip>
              ))}
            </div>
          )}
        </div>
        <Link css={categoryCss} to={`/${blog}/category/${category.toLowerCase()}`}>
          {category}
        </Link>
      </Flex>
    </article>
  );
};
