import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Box } from '@/components/Box';
import { GlobalStyles } from '@/components/GlobalStyles';
import { css } from '@emotion/react';
import { SPACING } from '@/constants';
import { Chip } from '@/components/Chip';

const TitleAndSubtitle = ({ title, subtitle }) => {
  return (
    <Box id="title-and-subtitle" vMargin={SPACING.lg}>
      <h1 id="title">{title}</h1>

      {subtitle && (
        <div
          id="subtitle"
          css={css`
            color: #242424;
            font-family: var(--font-special);
            font-weight: bold;
            margin: ${SPACING.lg} inherit;
          `}
        >
          {subtitle}
        </div>
      )}
    </Box>
  );
};

const Tags = ({ tags, blog }) => {
  if (!tags || !tags?.length) return null;

  return (
    <Box id="post-tags" vMargin={SPACING.lg}>
      {tags.map((tag: string) => {
        const to = `/${blog}/tag/${tag.toLowerCase()}`;
        return <Chip to={to}>{tag}</Chip>;
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
    <Box vMargin={SPACING.xl} sx={container} id="post-meta">
      <div>
        <span css={keyStyle}>By</span> Tyler Auer
      </div>
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
      <Header />
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
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
      </main>
      <Footer />
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
