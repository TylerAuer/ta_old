import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';
import { Box } from '@/components/Box';
import { GlobalStyles } from '@/components/GlobalStyles';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PostPreview } from '@/components/PostPreview';
import { SPACING } from '@/constants';

const blogDesc = {
  code: 'Learnings and musings bathed in monitor glow.',
  adventure: 'Seeking out Type II fun in nature and life.',
};

const h1LabelCss = css`
  color: #282828;
  background: var(--color-punch-bright);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;

export default ({ data, pageContext }) => {
  const { blog, label, type } = pageContext;

  let postsToList = [];

  if (data?.tagPosts?.nodes) postsToList.push(...data.tagPosts.nodes);
  if (data?.categoryPosts?.nodes) postsToList.push(...data.categoryPosts.nodes);

  const Subtitle = () => (
    <div>
      Posts from the {blog} blog with the {type.toLowerCase()} "{label.toLowerCase()}"
    </div>
  );

  return (
    <GlobalStyles>
      <Header />
      <main>
        <Box
          css={css`
            border-bottom: 3px solid var(--color-punch);
            padding-bottom: ${SPACING.xxl};
          `}
        >
          <header>
            <h1>
              <span css={h1LabelCss}>{label}</span> in <Link to={`/${blog}`}>{blog}</Link>
            </h1>
            <Subtitle />
          </header>
        </Box>
        <Box>
          <section>
            {postsToList.map((p) => (
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
  query($blog: String!, $label: String!, $isTag: Boolean!, $isCategory: Boolean!) {
    tagPosts: allMdx(
      filter: { fields: { blog: { eq: $blog } }, frontmatter: { tags: { in: [$label] } } }
    ) @include(if: $isTag) {
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
    categoryPosts: allMdx(
      filter: { fields: { blog: { eq: $blog } }, frontmatter: { category: { eq: $label } } }
    ) @include(if: $isCategory) {
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
