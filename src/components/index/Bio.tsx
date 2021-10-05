import { A } from '@/elements';
import { Block } from '../Block';

export const Bio = () => (
  <section id="name-and-bio">
    <Block>
      <p>
        After teaching math for twelve years, I taught myself to code. Now I built tools at{' '}
        <A to="http://nextdoor.com">Nextdoor</A> that help users share their personalities and
        protect their identities.
      </p>
      <p>
        When not staring at a screen I enjoy reading sci-fi and fantasy series, making puzzles,
        playing board games, and long walks on exposed ridgelines.
      </p>
    </Block>
  </section>
);
