import { Fragment } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { SyntaxHighlighter } from '@/components/SyntaxHighlighter';
import { P } from '@/components/P';
import { A } from '@/elements/A';
import { FootnoteList } from '@/components/FootnotesList';
import { H1, H2, H3, H4 } from '@/elements/Heading';

const components = {
  // Target elements based on HTML tags
  pre: SyntaxHighlighter,
  p: P,
  a: (props) => <A to={props.url} children={props.children} />,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  // Target elements more precisely
  wrapper: ({ children }) => {
    // Handle empty posts
    if (!children) return <Fragment></Fragment>;

    const updatedChildren = children.map((child) => {
      // Target list of footnotes at bottom of post
      if (child.props.className === 'footnotes') {
        return <FootnoteList key={1} {...child.props} />;
      }
      return child;
    });

    return <Fragment>{updatedChildren}</Fragment>;
  },
};

export default function PostProvider({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
