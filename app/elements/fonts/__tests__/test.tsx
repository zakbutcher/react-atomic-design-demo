import React from 'react';
import { render } from '@testing-library/react';
import {
  PageTitle,
  SectionTitle,
  SubsectionTitle,
  PrimaryText,
  DescriptionText,
} from 'elements';

describe('Fonts', () => {
  it('Renders PageTitle', () => {
    const { container } = render(<PageTitle>Page Title</PageTitle>);
    expect(container).toMatchSnapshot();
  });
  it('Renders SectionTitle', () => {
    const { container } = render(<SectionTitle>Section Title</SectionTitle>);
    expect(container).toMatchSnapshot();
  });
  it('Renders SubsectionTitle', () => {
    const { container } = render(
      <SubsectionTitle>Subsection Title</SubsectionTitle>,
    );
    expect(container).toMatchSnapshot();
  });
  it('Renders PrimaryText', () => {
    const { container } = render(<PrimaryText>Primary Text</PrimaryText>);
    expect(container).toMatchSnapshot();
  });
  it('Renders DescriptionText', () => {
    const { container } = render(
      <DescriptionText>Description Text</DescriptionText>,
    );
    expect(container).toMatchSnapshot();
  });
});
