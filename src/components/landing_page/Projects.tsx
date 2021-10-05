import React from 'react';
import { color, spacing } from '@/constants';
import { A, Heading } from '@/elements';
import { Box } from '@/elements/Box';
import { Icon } from '@/elements/Icon';
import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { Chip } from '../../elements/Chip';
import { Flex, FlexJustification } from '../Flex';
import { IconType } from '@/elements/Icon';

const CONTAINER_SX = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${spacing.xl} 0;
`;

const PROJECT_NAME_SX = css`
  margin: 0.5rem 1.5rem 0.5rem 0;
`;

const CHIP_SX = css`
  padding: 3px 1rem 2px 1rem;
`;

const ICON_SX = css`
  width: 5rem;
  flex-shrink: 0;
  margin-left: 3rem;
  fill: ${color.icon};
`;

export function Projects() {
  return (
    <section role="list" id="projects">
      <Heading level={2}>Projects</Heading>
      <Project
        title="Bad Calculators"
        desc={
          <>
            Mathy puzzles on pitiful, miserable calculators. These brain melters are addictive: ~5K
            users have amassed over 150k puzzle attempts. Bring a pencil (or a BFS algorithm).
          </>
        }
        chips={[
          { text: 'Live', to: 'https://badcalculators.com' },
          { text: 'Source', to: 'https://github.com/TylerAuer/bad-calculators' },
        ]}
        icon="calculator"
      />

      <Project
        title="Super Stupid Props"
        desc={
          <>
            A Super Bowl props game where players optionally contribute to a community pot donated
            to a charity of the winner's choosing. In 2021 we donated $1,568 to the Pancreatic
            Cancer Action Network!{' '}
            <A to="https://docs.google.com/forms/d/e/1FAIpQLSddqaaSxbJne8yJ7XNdAsxFPC68cmjq2aHG6IpHRqRmZKnYAg/viewform">
              Sign up
            </A>{' '}
            to play next year; donations optional.
          </>
        }
        chips={[
          {
            text: 'Sign up',
            to:
              'https://docs.google.com/forms/d/e/1FAIpQLSddqaaSxbJne8yJ7XNdAsxFPC68cmjq2aHG6IpHRqRmZKnYAg/viewform',
          },
          { text: 'Source', to: 'https://github.com/TylerAuer/super-bowl-props-lv' },
        ]}
        icon="football"
      />

      <Project
        title="Fruit Matrix"
        desc={
          <>
            Drag-and-drop fruit on a two-axis graph to rate each's tastiness and ease of eating.
            Submit your ratings and get hit with a smorgasbord of unnecessarily involved{' '}
            <A to="https://fruit.tylerauer.com/#/data/#histograms">charts</A> aggregating every
            rating the site has ever seen.
          </>
        }
        chips={[
          { text: 'Live', to: 'https://fruit.tylerauer.com' },
          { text: 'Data', to: 'https://fruit.tylerauer.com/#/data' },
          { text: 'Source', to: 'https://github.com/TylerAuer/fruit' },
        ]}
        icon="fruit"
      />

      <Project
        title="Bookshelf"
        desc={
          <>
            {' '}
            A big 'ol pile of my favorite books presented in a slick masonry grid with filters for
            themes and genres.
          </>
        }
        chips={[{ text: 'Live', to: '/bookshelf' }]}
        icon="book"
      />
    </section>
  );
}

type ChipParts = {
  to: string;
  text: string;
};

type ProjectProps = {
  title: string;
  desc: ReactNode;
  chips: ChipParts[];
  icon: keyof typeof IconType;
};

function Project({ title, desc, chips, icon }: ProjectProps) {
  return (
    <Box role="listitem" sx={CONTAINER_SX}>
      <div>
        <Flex flex={FlexJustification.start}>
          <Heading sx={PROJECT_NAME_SX} level={3}>
            {title}
          </Heading>
          <div>
            {chips.map((chip) => (
              <Chip sx={CHIP_SX} to={chip.to}>
                {chip.text}
              </Chip>
            ))}
          </div>
        </Flex>
        <p>{desc}</p>
      </div>
      <Icon icon={icon} sx={ICON_SX} />
    </Box>
  );
}
