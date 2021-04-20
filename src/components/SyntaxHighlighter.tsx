import { css } from '@emotion/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Box } from './Box';
import palenight from 'prism-react-renderer/themes/palenight';

// Two other dark themes that are nice
// import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
// import dracula from 'prism-react-renderer/themes/nightOwl';

const basicFrameCss = css`
  padding: 2.5rem;
  border-radius: 8px;
`;

export const SyntaxHighlighter = (props) => {
  // Get the language from the classname. Ex: language-js
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  const language = matches && matches.groups && matches.groups.lang ? matches.groups.lang : '';

  console.log(props);

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
      theme={palenight}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box width="standard">
          <pre css={basicFrameCss} className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </Box>
      )}
    </Highlight>
  );
};
