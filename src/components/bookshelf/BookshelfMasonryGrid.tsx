import { GenreType } from '@/types';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

type Props = {
  activeFilters: GenreType[];
};

export const BookshelfMasonryGrid: React.FC<Props> = ({ activeFilters }) => {
  const query = useStaticQuery(graphql`
    {
      allBookDataYaml {
        nodes {
          cover {
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: DOMINANT_COLOR)
              original {
                height
                width
              }
            }
            name
          }
          genres
        }
      }
    }
  `);

  const books = query.allBookDataYaml.nodes;
  console.log(books);

  return (
    <div>
      {books.map((b) => (
        <GatsbyImage alt={b.title} image={getImage(b.cover)} />
      ))}
    </div>
  );
};
