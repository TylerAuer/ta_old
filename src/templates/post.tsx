import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Helmet } from 'react-helmet';

import { Box } from '@/elements/Box';
import { GlobalStyles } from '@/components/GlobalStyles';
import { css } from '@emotion/react';
import { spacing } from '@/constants';
import { Chip } from '@/elements/Chip';
import PostProvider from '@/components/PostProvider';
import { PageBox } from '@/components/PageBox';
import { Heading } from '@/elements/Heading';

const SUBTITLE_CSS = css`
  color: #242424;
  font-family: var(--font-special);
  font-weight: bold;
  margin: ${spacing.lg} inherit;
`;

const TitleAndSubtitle = ({ title, subtitle }) => {
  return (
    <Box id="title-and-subtitle" vMargin={spacing.lg}>
      <Heading level={1} id="title">
        {title}
      </Heading>

      {subtitle && (
        <div id="subtitle" css={SUBTITLE_CSS}>
          {subtitle}
        </div>
      )}
    </Box>
  );
};

const Tags = ({ tags, blog }) => {
  if (!tags || !tags?.length) return null;

  return (
    <Box id="post-tags" vMargin={spacing.lg}>
      {tags.map((tag: string) => {
        const to = `/${blog}/tag/${tag.toLowerCase()}`;
        return (
          <Chip key={tag} to={to}>
            {tag}
          </Chip>
        );
      })}
    </Box>
  );
};

const PostMeta = ({ blog, category, date, update }) => {
  const container = css`
    font-size: 1.4rem;
    font-family: var(--font-special);
  `;

  const keyStyle = css`
    font-weight: bold;
    color: var(--color-punch);
    padding-right: 0.2rem;

    &:after {
      content: ':';
      color: black;
    }
  `;

  const url = css`
    & > a {
      border: none;
      font-weight: inherit;
      color: var(--color-punch);
      padding: 0 2px;

      &:hover {
        color: var(--color-punch-dark);
        border: inherit;
        border-bottom: 2px solid var(--color-punch);
      }
    }
  `;

  return (
    <Box vMargin={spacing.xl} sx={container} id="post-meta">
      {/* <div>
        <span css={keyStyle}>By</span> Tyler Auer
      </div> */}
      <div css={url}>
        <span css={keyStyle}>In</span> /<Link to={`/${blog}`}>{blog}</Link>/
        <Link to={`/${blog}/category/${category.toLowerCase()}`}>{category.toLowerCase()}</Link>
      </div>
      <div>
        <span css={keyStyle}>On</span> {date}
      </div>
    </Box>
  );
};

export default ({ data }) => {
  const post = data.mdx;
  const { title, subtitle, tags, category, date_created, date_last_updated } = post.frontmatter;
  const { blog } = post.fields;

  return (
    <GlobalStyles>
      <Helmet>
        <title>{`${title} - Tyler Auer's ${blog[0].toUpperCase() + blog.slice(1)} Blog`}</title>
        <meta name="description" content={`${title}: ${subtitle} by Tyler Auer`} />
      </Helmet>
      <PageBox>
        <main>
          <article>
            <header>
              <TitleAndSubtitle title={title} subtitle={subtitle} />
              <Tags blog={blog} tags={tags} />
              <PostMeta
                blog={blog}
                category={category}
                date={date_created}
                update={date_last_updated}
              />
            </header>
            <PostProvider>
              <MDXRenderer>{post.body}</MDXRenderer>
            </PostProvider>
          </article>
        </main>
      </PageBox>
    </GlobalStyles>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    mdx(fields: { path: { eq: $path } }) {
      id
      body
      frontmatter {
        title
        subtitle
        date_created(formatString: "MMMM D, YYYY")
        tags
        category
        date_last_updated
      }
      fields {
        blog
      }
    }
  }
`;
