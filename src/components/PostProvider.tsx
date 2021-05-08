import { MDXProvider } from '@mdx-js/react';
import { SyntaxHighlighter } from '@/components/SyntaxHighlighter';
import { P } from '@/components/P';
import { A } from '@/components/A';

export default function PostProvider({ children }) {
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        pre: SyntaxHighlighter,
        p: P,
        a: A,
        // Or define component inline
        // p: (props) => <p {...props} style={{ color: 'rebeccapurple' }} />,
      }}
    >
      {children}
    </MDXProvider>
  );
}
