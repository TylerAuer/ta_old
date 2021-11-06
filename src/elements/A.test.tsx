import React from 'react';
import { screen, render } from '@testing-library/react';
import { A } from '.';

describe('<A/>', () => {
  it('renders correctly', () => {
    render(<A to="/test_url">Link to test_url</A>);
    screen.getByText('Link to test_url');
  });
});
