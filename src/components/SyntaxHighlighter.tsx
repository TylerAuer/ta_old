import { css, SerializedStyles } from '@emotion/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Box } from './Box';
import palenight from 'prism-react-renderer/themes/palenight';

// Two other dark themes that are nice
// import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
// import dracula from 'prism-react-renderer/themes/nightOwl';

const WindowDotBtns = () => {
  const dotStyle = css`
    position: relative;
    display: inline-block;
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    margin: 0 4px;
  `;

  return (
    <div
      css={css`
        position: absolute;
        display: inline-block;
        left: 10px;
        top: 0;
        z-index: 2;
      `}
    >
      <div
        css={css`
          ${dotStyle}
          background-color: rgb(255,95,87);
        `}
      />
      <div
        css={css`
          ${dotStyle}
          background-color: rgb(254,188,56);
        `}
      />
      <div
        css={css`
          ${dotStyle}
          background-color: rgb(40,200,64);
        `}
      />
    </div>
  );
};

interface ContainerProps {
  filename?: string;
}

const WindowFrame: React.FC<ContainerProps> = ({ filename, children }) => {
  const frameCss = css`
    background-color: var(--color-grey-bg-dark);
    border-radius: 8px;
    padding-top: 1rem;
    position: relative;
    box-shadow: var(--shadow-subtle);
  `;

  if (!filename) {
    return <Box width="standard">{children}</Box>;
  }

  const filenameCss = css`
    font-size: 1.3rem;
    color: white;
    text-align: center;
    font-style: italic;
    line-height: 1.2;
  `;

  const Filename = <div css={filenameCss}>{filename}</div>;

  return (
    <Box width="standard" sx={frameCss}>
      <div
        css={css`
          height: 8px;
        `}
      >
        <WindowDotBtns />
        {filename && Filename}
      </div>
      {children}
    </Box>
  );
};

export const SyntaxHighlighter = (props) => {
  // Get the language from the classname. Ex: language-js
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  const language = matches && matches.groups && matches.groups.lang ? matches.groups.lang : '';

  // Get the frame style from the metastring if there is one
  const { metastring } = props.children.props;
  const filename = metastring.match(/\[(.*)]/)[1] || null;

  const codeCss = css`
    padding: 1.8rem;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: ${filename ? 0 : 8}px;
    border-top-right-radius: ${filename ? 0 : 8}px;
  `;

  return (
    <WindowFrame filename={filename}>
      <Highlight
        {...defaultProps}
        code={props.children.props.children.trim()}
        language={language}
        theme={palenight}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre css={codeCss} className={className} style={style}>
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
    </WindowFrame>
  );
};
