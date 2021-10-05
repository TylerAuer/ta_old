import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import { GlobalStyles } from '@/components/GlobalStyles';
import { PageBox } from '@/components/PageBox';
import { Projects } from '@/components/landing_page/Projects';
import { Bio } from '@/components/landing_page/Bio';
import { Blogs } from '@/components/landing_page/Blogs';

// TODO: Figure out how to get this component to recognize data.allMdx
// currently the "data: any" just ignores it
const Home: React.FC<PageProps> = ({ data }: { data: any }) => {
  const posts = data.allMdx.nodes;
  return (
    <GlobalStyles>
      <Helmet>
        <title>Tyler Auer - Math teacher turned software developer</title>
        <meta
          name="description"
          content={`"Stupid" projects and ramblings about code and adventure.`}
        />
      </Helmet>
      <PageBox includeHomeLink={false}>
        <main>
          <Bio />
          {/* <TruthsAndLies count={5} /> */}
          <Projects />
          <Blogs posts={posts} />
        </main>
      </PageBox>
    </GlobalStyles>
  );
};

export default Home;

export const codeFeaturedQuery = graphql`
  query {
    allMdx(filter: { frontmatter: { featured: { eq: true }, draft: { eq: false } } }) {
      nodes {
        fields {
          blog
          path
        }
        frontmatter {
          category
          date_created(formatString: "MMMM D, YYYY")
          featured
          location
          subtitle
          tags
          title
        }
      }
    }
  }
`;
