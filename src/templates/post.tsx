import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SetWidth, WIDTHS } from '@/components/SetWidth';
import { GlobalStyles } from '@/components/GlobalStyles';
import { css } from '@emotion/react';
import { SPACING } from '@/constants';
import { Chip } from '@/components/Chip';

const TitleAndSubtitle = ({ title, subtitle }) => {
  return (
    <div
      id="title-and-subtitle"
      css={css`
        margin: ${SPACING.lg} 0;
      `}
    >
      <h1
        id="title"
        css={css`
          color: #da4167;
          font-size: 3rem;
          margin-bottom: 0;
        `}
      >
        {title}
      </h1>
      {subtitle && (
        <div
          id="subtitle"
          css={css`
            color: #242424;
          `}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
};

const Tags = ({ tags, blog }) => {
  if (!tags || !tags?.length) return null;

  return (
    <div
      id="post-tags"
      css={css`
        margin: ${SPACING.lg} 0;
      `}
    >
      {tags.map((tag: string) => {
        const to = `/${blog}/tag/${tag.toLowerCase()}`;
        return <Chip to={to}>{tag}</Chip>;
      })}
    </div>
  );
};

const PostMeta = ({ blog, category, date, update }) => {
  const container = css`
    margin: ${SPACING.xl} 0;
    font-size: 1.4rem;
    font-family: var(--font-special);
  `;

  const keyStyle = css`
    font-weight: bold;
    color: #da4167;
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
      color: #da4167;
      padding: 0 2px;

      &:hover {
        border: inherit;
        border-bottom: 3px solid #da4167;
      }
    }
  `;

  return (
    <div css={container} id="post-meta">
      <div>
        <span css={keyStyle}>By</span> Tyler Auer
      </div>
      <div css={url}>
        <span css={keyStyle}>In</span> /<Link to={`/${blog}`}>{blog}</Link>/
        <Link to={`/${blog}/category/${category.toLowerCase()}`}>
          {category.toLowerCase()}
        </Link>
      </div>
      <div>
        <span css={keyStyle}>On</span> {date}
      </div>
    </div>
  );
};

export default ({ data }) => {
  const post = data.mdx;
  const {
    title,
    subtitle,
    tags,
    category,
    date_created,
    date_last_updated,
  } = post.frontmatter;
  const { blog } = post.fields;

  return (
    <GlobalStyles>
      <Header />
      <main>
        <article>
          <SetWidth>
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
          </SetWidth>
          <SetWidth width={WIDTHS.narrow}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </SetWidth>
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
