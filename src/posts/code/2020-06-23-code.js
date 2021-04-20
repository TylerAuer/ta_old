import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

const babel = `
///////////////////////////////////
// My code before Babel converts it
const adjectives = ['cool', 'human', 'bad at choosing adjectives'];

adjectives.forEach((adj) => {
  console.log(\`Tyler is $\{adj}\`);
});

//////////////////////////////////
// My code after Babel converts it
('use strict');

var adjectives = ['cool', 'human', 'bad at choosing adjectives'];
adjectives.forEach(function (adj) {
  console.log('Tyler is '.concat(adj));
});
`;

export const BabelCode = () => (
  <Highlight {...defaultProps} theme={theme} code={babel} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);
