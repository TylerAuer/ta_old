import { render, screen } from '@testing-library/react';
import { Chip } from './Chip';

const chipText = "Hi! I'm Chip.";
const dataTestId = 'chip-test';
const id = 'chip-id';
const className = 'chip-classname';
const toLink = '/chip_link';

describe('<Chip />', () => {
  it('renders as link if passed a "to" prop', () => {
    render(<Chip to={toLink}>{chipText}</Chip>);
    const chip = screen.getByText(chipText);
    expect(chip.tagName).toBe('A');
  });

  it('renders as div if not passed a "to" prop', () => {
    render(<Chip>{chipText}</Chip>);
    const chip = screen.getByText(chipText);
    expect(chip.tagName).toBe('DIV');
  });

  it('passes data-testid, id, and classname', () => {
    render(
      <Chip dataTestId={dataTestId} id={id} className={className}>
        {chipText}
      </Chip>,
    );
    const chip = screen.getByTestId(dataTestId);
    expect(chip).toHaveAttribute('id', id);
    expect(chip).toHaveClass(className);
  });
});
