import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { SyntaxHighlighter } from '@/components/SyntaxHighlighter';
import { P } from '@/components/P';
import { A } from '@/components/A';
import { FootnoteList } from '@/components/FootnotesList';

const components = {
  // Target elements based on HTML tags
  pre: SyntaxHighlighter,
  p: P,
  a: A,
  // Target elements more precisely
  wrapper: ({ children }) => {
    const updatedChildren = children.map((child) => {
      // Target list of footnotes at bottom of post
      if (child.props.className === 'footnotes') {
        return <FootnoteList key={1} {...child.props} />;
      }
      return child;
    });
    return <>{updatedChildren}</>;
  },
};

export default function PostProvider({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
