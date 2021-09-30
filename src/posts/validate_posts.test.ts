import fs from 'fs';
import fm from 'front-matter';
import path from 'path';
import {
  AdventurePostCategories,
  AdventurePostLocations,
  AdventurePostTags,
  CodePostCategories,
  CodePostTags,
} from './post_types';

describe('validate adventure posts', () => {
  const adventurePosts = loadPosts('adventure');

  const featuredPostCount = adventurePosts.reduce((acc, curr) => {
    return curr.frontmatter.featured ? acc + 1 : acc;
  }, 0);

  it('has 3 to 5 featured post', () => {
    // TODO: Update this as I make more posts
    expect(featuredPostCount).toBe(1);
    // expect(featuredPostCount).toBeGreaterThanOrEqual(3);
    // expect(featuredPostCount).toBeLessThanOrEqual(5);
  });

  adventurePosts.forEach((post) => {
    const {
      title,
      subtitle,
      date_created,
      date_last_updated,
      location,
      category,
      tags,
      featured,
      draft,
    } = post.frontmatter;

    describe(`adventure/${post.fileName}`, () => {
      it('title', () => {
        expect(title).toBeDefined();
        expect(typeof title).toBe('string');
        expect(title.length).toBeGreaterThan(5);
      });

      it('subtitle', () => {
        expect(subtitle).toBeDefined();
        expect(typeof subtitle).toBe('string');
        expect(subtitle.length).toBeGreaterThan(5);
      });

      it('date_created', () => {
        expect(date_created).toBeDefined();
        expect(typeof date_created).toBe('string');
        expect(typeof Date.parse(date_created)).toBe('number');
      });

      it('date_last_updated or false', () => {
        expect(date_last_updated).toBeDefined();

        // Can be false or a date string
        const isValidType = date_last_updated === false || typeof date_last_updated === 'string';
        expect(isValidType).toBe(true);
        if (typeof date_last_updated === 'string') {
          expect(typeof Date.parse(date_last_updated)).toBe('number');
        }
      });

      it('location from AdventurePostLocations enum', () => {
        expect(location).toBeDefined();
        expect(location in AdventurePostLocations).toBe(true);
      });

      it('categories from AdventurePostCategories enum', () => {
        expect(category).toBeDefined();
        expect(category in AdventurePostCategories).toBe(true);
      });

      it('>= 1 tags from AdventurePostTags enum', () => {
        expect(tags).toBeDefined();
        expect(tags.length).toBeGreaterThanOrEqual(1);
        tags.forEach((tag: string) => {
          expect(tag in AdventurePostTags).toBe(true);
        });
      });

      it('featured', () => {
        expect(featured).toBeDefined();
        expect(typeof featured).toBe('boolean');
      });

      it('draft', () => {
        expect(draft).toBeDefined();
        expect(typeof draft).toBe('boolean');
      });
    });
  });
});

describe('validate code posts', () => {
  const codePosts = loadPosts('code');

  const featuredPostCount = codePosts.reduce((acc, curr) => {
    return curr.frontmatter.featured ? acc + 1 : acc;
  }, 0);

  it('has 3 to 5 featured post', () => {
    expect(featuredPostCount).toBeGreaterThanOrEqual(3);
    expect(featuredPostCount).toBeLessThanOrEqual(5);
  });

  codePosts.forEach((post) => {
    const {
      title,
      subtitle,
      date_created,
      date_last_updated,
      category,
      tags,
      featured,
      draft,
    } = post.frontmatter;

    describe(`code/${post.fileName}`, () => {
      it('title', () => {
        expect(title).toBeDefined();
        expect(typeof title).toBe('string');
        expect(title.length).toBeGreaterThan(5);
      });

      it('subtitle', () => {
        expect(subtitle).toBeDefined();
        expect(typeof subtitle).toBe('string');
        expect(subtitle.length).toBeGreaterThan(5);
      });

      it('date_created', () => {
        expect(date_created).toBeDefined();
        expect(typeof date_created).toBe('string');
        expect(typeof Date.parse(date_created)).toBe('number');
      });

      it('date_last_updated or false', () => {
        expect(date_last_updated).toBeDefined();

        // Can be false or a date string
        const isValidType = date_last_updated === false || typeof date_last_updated === 'string';
        expect(isValidType).toBe(true);
        if (typeof date_last_updated === 'string') {
          expect(typeof Date.parse(date_last_updated)).toBe('number');
        }
      });

      it('categories from CodePostCategories enum', () => {
        expect(category).toBeDefined();
        expect(category in CodePostCategories).toBe(true);
      });

      it('>= 1 tags from CodePostTags enum', () => {
        expect(tags).toBeDefined();
        expect(tags.length).toBeGreaterThanOrEqual(1);
        tags.forEach((tag: string) => {
          expect(tag in CodePostTags).toBe(true);
        });
      });

      it('featured', () => {
        expect(featured).toBeDefined();
        expect(typeof featured).toBe('boolean');
      });

      it('draft', () => {
        expect(draft).toBeDefined();
        expect(typeof draft).toBe('boolean');
      });
    });
  });
});

type PostData = {
  post: string;
  fileName: string;
  path: string;
  frontmatter: { [key: string]: any };
};

function loadPosts(blogDirName: string): PostData[] {
  const fileNames = getPostMdxFileNames(blogDirName);

  return fileNames.map((fileName) => {
    const pathToFile = path.join(__dirname, blogDirName, fileName);
    const post = fs.readFileSync(pathToFile, { encoding: 'utf-8' });

    return {
      post,
      fileName,
      path: pathToFile,
      frontmatter: fm(post).attributes,
    };
  });
}

function loadPost(path: string): string {
  return fs.readFileSync(path, { encoding: 'utf-8' });
}

function getPostMdxFileNames(blogDirName: string): string[] {
  const posts: string[] = [];

  const fileNames = fs.readdirSync(path.join(__dirname, blogDirName));
  posts.push(...fileNames.filter((fileName) => fileName.match(/.mdx$/)));

  return posts;
}
