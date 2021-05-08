import { MDXProvider } from '@mdx-js/react';
import { SyntaxHighlighter } from '@/components/SyntaxHighlighter';
import { P } from '@/components/P';

export default function PostProvider({ children }) {
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        pre: SyntaxHighlighter,
        p: P,
        // Or define component inline
        // p: (props) => <p {...props} style={{ color: 'rebeccapurple' }} />,
      }}
    >
      {children}
    </MDXProvider>
  );
}
