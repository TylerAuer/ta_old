import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SetWidth, WIDTHS } from '@/components/SetWidth';
import { GlobalStyles } from '@/components/GlobalStyles';
import { css } from '@emotion/react';
import { SPACING } from '@/styles';
import { Chip } from '@/components/Chip';

export default ({ data }) => {
  const post = data.mdx;
  const { frontmatter } = post;
  const { blog } = post.fields;

  return (
    <GlobalStyles>
      <Header />
      <main>
        <article>
          <SetWidth>
            <header
              css={css`
                /* border-bottom: 3px solid var(--color-h2-border); */
                padding-bottom: ${SPACING.md};
                margin-bottom: ${SPACING.md};
              `}
            >
              <div
                css={css`
                  margin-bottom: ${SPACING.xl};
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
                  {frontmatter.title}
                </h1>
                <div
                  id="subtitle"
                  css={css`
                    color: #242424;
                  `}
                >
                  {frontmatter.subtitle}
                </div>
                <div id="post-tags">
                  {frontmatter.tags.map((tag: string) => {
                    const to = `/${blog}/tag/${tag.toLowerCase()}`;
                    return <Chip to={to}>{tag}</Chip>;
                  })}
                </div>
              </div>
              <div
                css={css`
                  font-size: 1.4rem;
                  font-family: var(--font-special);
                `}
                id="post-details"
              >
                <div>By: Tyler Auer</div>
                <div>
                  In: /<Link to="/code">code</Link>/
                  <Link to={`/code/${frontmatter.category.toLowerCase()}`}>
                    {frontmatter.category.toLowerCase()}
                  </Link>
                </div>
                <div>On: {frontmatter.date_created}</div>
              </div>
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
        date_created(formatString: "MMMM DD, YYYY")
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
