import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';

import { Box } from '@/elements/Box';
import { GlobalStyles } from '@/components/GlobalStyles';
import { PageBox } from '@/components/PageBox';
import { PostPreview } from '@/components/PostPreview';

const blogDesc = {
  code: 'Learnings and musings bathed in monitor glow.',
  adventure: 'Seeking out Type II fun in nature and life.',
};

export default ({ data, pageContext }) => {
  const { blog } = pageContext;
  const posts = data.allMdx.nodes;

  return (
    <GlobalStyles>
      <Helmet>
        <title>{blog[0].toUpperCase() + blog.slice(1)} Blog - Tyler Auer</title>
        <meta name="description" content={`Tyler Auer's blog about ${blog}`} />
      </Helmet>
      <PageBox>
        <main>
          <Box>
            <header>
              <h1
                css={css`
                  text-transform: capitalize;
                `}
              >
                {blog}
              </h1>
              <div>{blogDesc[blog]}</div>
            </header>
          </Box>
          <Box>
            <section>
              {posts.map((p) => (
                <PostPreview hLevel={3} post={p} key={p.path} />
              ))}
            </section>
          </Box>
        </main>
      </PageBox>
    </GlobalStyles>
  );
};

export const pageQuery = graphql`
  query($blog: String!) {
    allMdx(
      filter: { fields: { blog: { eq: $blog } }, frontmatter: { draft: { eq: false } } }
      sort: { fields: frontmatter___date_created, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          subtitle
          date_created(formatString: "MMMM D, YYYY")
          tags
          category
          date_last_updated
        }
        fields {
          path
          blog
        }
      }
    }
  }
`;
