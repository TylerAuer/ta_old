import { screen, render } from '@testing-library/react';
import { A } from '.';

const internalUrl = '/internal';
const externalUrl = 'http://external.com';
const isInternalText = 'Add me in mock for internal links';

jest.mock('gatsby', () => ({
  Link: jest.fn().mockImplementation((props) => (
    <div>
      <a href={props.to}>{props.children}</a>
      <div>{isInternalText}</div>
    </div>
  )),
}));

describe('<A/>', () => {
  it('renders', () => {
    render(<A to={internalUrl}>{internalUrl}</A>);
    screen.getByText(internalUrl);
  });

  it('uses anchor tag for external link', () => {
    render(<A to={externalUrl}>{externalUrl}</A>);
    screen.getByText(externalUrl);
  });

  it('uses Gatsby <Link /> for internal links', () => {
    render(<A to={internalUrl}>{internalUrl}</A>);
    screen.getByText(isInternalText);
  });
});
