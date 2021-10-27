import { Fragment } from 'react';
import { spacing } from '@/constants';
import { A, Heading } from '@/elements';
import { Box } from '@/elements/Box';
import { Icon } from '@/elements/Icon';
import { css } from '@emotion/react';
import { Button } from '../Button';
import { PostPreview } from '../PostPreview';

const SECTION_SX = css`
  margin-bottom: ${spacing.xxl};
`;

const BTN_SX = css`
  text-align: center;
  margin: ${spacing.xl} 0;
`;

const TITLE_ICON_SX = css`
  width: 3.5rem;
  margin-right: 2rem;
  vertical-align: middle;
`;

export const Blogs = ({ posts }) => {
  const featCodePosts = posts.filter((post) => post.fields.blog === 'code');
  const featAdventurePosts = posts.filter((post) => post.fields.blog === 'adventure');

  return (
    <Fragment>
      <section css={SECTION_SX} id="code-posts">
        <Box>
          <A to="/code">
            <Heading level={2}>
              <Icon sx={TITLE_ICON_SX} icon="code" />
              Code
            </Heading>
          </A>
        </Box>
        <FeaturedPosts posts={featCodePosts} />
        <div css={BTN_SX}>
          <Button to="/code">All code posts</Button>
        </div>
      </section>

      <section css={SECTION_SX} id="adventure-posts">
        <Box>
          <A to="/adventure">
            <Heading level={2}>
              <Icon sx={TITLE_ICON_SX} icon="mountains" />
              Adventure
            </Heading>
          </A>
        </Box>
        <FeaturedPosts posts={featAdventurePosts} />
        <div css={BTN_SX}>
          <Button to="/adventure">All adventure posts</Button>
        </div>
      </section>
    </Fragment>
  );
};

function FeaturedPosts({ posts }) {
  return (
    <Box role="list">
      {posts.map((post) => (
        <PostPreview hLevel={3} role="listitem" key={post.fields.path} post={post} />
      ))}
    </Box>
  );
}
