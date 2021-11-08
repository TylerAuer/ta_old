import { render, screen } from '@testing-library/react';
import { P } from './P';

const pText = 'This is a paragraph of text.';
const dataTestId = 'p-test';
const id = 'p-id';
const className = 'p-classname';

describe('<P />', () => {
  it('passes data-testid, id, and classname', () => {
    render(
      <P dataTestId={dataTestId} id={id} className={className}>
        {pText}
      </P>,
    );
    const p = screen.getByTestId(dataTestId);
    expect(p).toHaveAttribute('id', id);
    expect(p).toHaveClass(className);
  });
});
