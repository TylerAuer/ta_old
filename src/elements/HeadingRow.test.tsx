import { HeadingRow } from './HeadingRow';
import { screen, render } from '@testing-library/react';

const dataTestId = 'data-testid';
const id = 'id';
const className = 'className';
const title = 'title';
const rightNodeText = 'rightNodeText';
const RightNode = () => <div>{rightNodeText}</div>;

describe('<HeadingRow />', () => {
  it('passes data-testid, id, and classname', () => {
    render(
      <HeadingRow
        title={title}
        rightNode={<RightNode />}
        dataTestId={dataTestId}
        id={id}
        className={className}
      />,
    );
    const headingRow = screen.getByTestId(dataTestId);
    expect(headingRow.id).toBe(id);
    expect(headingRow).toHaveClass(className);
  });

  it('renders correct heading level', () => {
    render(
      <div>
        <HeadingRow rightNode={<RightNode />} title={'1'} level={1} />
        <HeadingRow rightNode={<RightNode />} title={'2'} level={2} />
        <HeadingRow rightNode={<RightNode />} title={'3'} level={3} />
        <HeadingRow rightNode={<RightNode />} title={'4'} level={4} />
        <HeadingRow rightNode={<RightNode />} title={'default'} />
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

  it('includes right node', () => {
    render(<HeadingRow title={title} rightNode={<RightNode />} />);
    screen.getByText(rightNodeText);
  });
});
