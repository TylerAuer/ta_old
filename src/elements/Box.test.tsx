import { render, screen } from '@testing-library/react';
import { Box } from './Box';

const child = 'child';
const dataTestId = 'test';
const id = 'id';
const className = 'classname';

describe('<Box />', () => {
  it('passes data-testid, id, and classname', () => {
    render(
      <Box dataTestId={dataTestId} id={id} className={className}>
        {child}
      </Box>,
    );
    const box = screen.getByText(child);
    expect(box).toHaveAttribute('id', id);
    expect(box).toHaveClass(className);
    expect(box).toHaveAttribute('data-testid', dataTestId);
  });
});
