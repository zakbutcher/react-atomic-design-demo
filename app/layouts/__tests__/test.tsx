import React from 'react';
import { render } from '@testing-library/react';
import { SplitLayout, MultiColumn, BaseLayout } from 'layouts';

describe('Layouts', () => {
  it('BaseLayout Renders', () => {
    const { container } = render(
      <BaseLayout>
        {{ pageTitle: 'Title Text', content: <div>Layout Content</div> }}
      </BaseLayout>,
    );
    expect(container).toMatchSnapshot();
  });
  it('SplitLayout Renders', () => {
    const { container } = render(
      <SplitLayout>
        {{ leftPanel: <div>Left Panel</div>, rightPanel: <div>Right Panel</div> }}
      </SplitLayout>,
    );
    expect(container).toMatchSnapshot();
  });
  it('MultiColumn Renders', () => {
    const { container, getAllByTestId } = render(
      <MultiColumn>{['First Column', 'Second Column', 'Third Column']}</MultiColumn>,
    );
    expect(container).toMatchSnapshot();
    expect(getAllByTestId('column-wrapper').length).toBe(3);
  });
});
