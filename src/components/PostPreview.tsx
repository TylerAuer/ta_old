import { Link } from 'gatsby';
import { css } from '@emotion/react';

import { Chip } from '@/components/Chip';
import { Heading } from '@/elements/Heading';
import { Flex, FlexJustification } from '@/components/Flex';

import { SPACING } from '@/constants';

type PostPreviewType = {
  frontmatter: {
    title: string;
    subtitle: string;
    category: string;
    tags: string[];
    location: string;
  };
  fields: {
    blog: string;
    path: string;
  };
};

type Props = {
  post: PostPreviewType;
  role?: string;
  hSize?: 2 | 3 | 4;
};

export const PostPreview: React.FC<Props> = ({ post, role, hSize = 2 }) => {
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
    font-weight: 600;

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
            <Heading level={hSize} css={titleCss}>
              {title}
            </Heading>
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
