import { StaticImage } from 'gatsby-plugin-image';

import { Box } from '@/components/Box';
import { Carousel, CarouselPhoto } from '@/components/Carousel';

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

const photoList: CarouselPhoto[] = [
  {
    component: (
      <StaticImage
        src="./loose_rock_on_way_to_summit.jpg"
        alt="Looking up at Cody Peak over loose rock"
      />
    ),
    caption: 'After the scramble the trail was easy-going up stable, loose rock',
  },
  {
    component: (
      <StaticImage src="./small_lake_over_edge.jpg" alt="Small lake viewed from Cody Peak summit" />
    ),
    caption:
      'Unnamed lake 1,000 feet below Cody Peak with views of Teton Pines and The Snake River in the distance',
  },
  {
    component: (
      <StaticImage
        src="./summit_pick_with_bad_haircut.jpg"
        alt="Tyler on the summit with a bad haircut"
      />
    ),
    caption:
      'No reason to a let a sweaty, self-administered COVID haircut ruin a good summit photo',
  },
  {
    component: (
      <StaticImage src="./looking_south_from_summit_ridge.jpg" alt="Peaks south of Cody Peak" />
    ),
    caption: 'Looking south over the path for a future adventure.',
  },
];

export const Carousel1 = () => <Carousel photoList={photoList} />;
