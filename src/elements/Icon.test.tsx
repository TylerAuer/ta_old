import { screen, render } from '@testing-library/react';
import { Icon } from './Icon';

describe('<Icon />', () => {
  it('renders', () => {
    render(<Icon icon="book" />);
  });

  it('passes data-testid, id, and classname', () => {
    const testId = 'test-id';
    const className = 'className';
    const id = 'id';

    render(<Icon icon="book" dataTestId={testId} className={className} id={id} />);
    const icon = screen.getByTestId(testId);
    expect(icon).toHaveAttribute('id', id);
    expect(icon).toHaveClass(className);
  });
});
