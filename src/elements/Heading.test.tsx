import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

const headingText = "Hi! I'm Heading.";
const dataTestId = 'heading-test';
const id = 'heading-id';
const className = 'heading-classname';
const toLink = '/heading_link';

describe('<Heading />', () => {
  it('passes data-testid, id, and classname', () => {
    render(
      <Heading dataTestId={dataTestId} id={id} className={className}>
        {headingText}
      </Heading>,
    );
    const heading = screen.getByTestId(dataTestId);
    expect(heading).toHaveAttribute('id', id);
    expect(heading).toHaveClass(className);
  });

  it('renders correct heading level', () => {
    render(
      <div>
        <Heading level={1}>1</Heading>
        <Heading level={2}>2</Heading>
        <Heading level={3}>3</Heading>
        <Heading level={4}>4</Heading>
        <Heading>default</Heading>
      </div>,
    );
    const h1 = screen.getByText('1');
    const h2 = screen.getByText('2');
    const h3 = screen.getByText('3');
    const h4 = screen.getByText('4');
    const hDefault = screen.getByText('default');
    expect(h1.tagName).toBe('H1');
    expect(h2.tagName).toBe('H2');
    expect(h3.tagName).toBe('H3');
    expect(h4.tagName).toBe('H4');
    expect(hDefault.tagName).toBe('H2');
  });
});
