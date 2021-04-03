import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import { Box } from '@/components/Box';
import { GlobalStyles } from '@/components/GlobalStyles';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
      <Header />
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
              <PostPreview post={p} key={p.path} />
            ))}
          </section>
        </Box>
      </main>
      <Footer />
    </GlobalStyles>
  );
};

export const pageQuery = graphql`
  query($blog: String!) {
    allMdx(
      filter: { fields: { blog: { eq: $blog } } }
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
