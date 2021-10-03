import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Box } from '@/elements/Box';
import { Slideshow } from '@/components/Slideshow';

export const CodyBowl = () => {
  return (
    <Box width="wide">
      <figure>
        <StaticImage alt="Cody Bowl from the north" src="./cody_bowl.jpg" />
        <figcaption>
          Northern face of Cody Peak (highest point) with scramble to reach ridgeline visible below
          right most peak.
        </figcaption>
      </figure>
    </Box>
  );
};

export const SS = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "posts" }
          ext: { regex: "/(jpg|png|gif)/" }
          relativeDirectory: { eq: "adventure/cody-peak-scramble/slideshow" }
        }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                aspectRatio: 1.778
                blurredOptions: { width: 100 }
              )
            }
          }
        }
      }
    }
  `);

  const captions = [
    'Unnamed lake 1,000 feet below Cody Peak with views of Teton Pines and The Snake River in the distance',
    'No reason to a let a sweaty, self-administered COVID haircut ruin a good summit photo. Smiling felt silly, but this look obviously is not good either.',
    'Looking south towards a future adventure.',
    'After the scramble the trail was easy-going up stable, loose rock',
    'Snow lingering from a recent storm',
    'Awesome ice formations',
  ];

  // Inject comments into GQL query
  for (let i = 0; i < data.allFile.edges.length; i++) {
    data.allFile.edges[i].caption = captions[i] || '';
  }

  return <Slideshow photoList={data.allFile.edges} />;
};
