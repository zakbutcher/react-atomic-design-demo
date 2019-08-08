import React from 'react';
import { render } from '@testing-library/react';
import { Circle } from 'elements';

describe('Shapes', () => {
  it('Circle Renders', () => {
    const { container } = render(<Circle />);
    expect(container).toMatchSnapshot();
  });
});
