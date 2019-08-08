import React from 'react';
import { render } from '@testing-library/react';
import { Link } from 'elements';

describe('Navigation', () => {
  it('Link Renders', () => {
    const linkUrl = 'http://www.link-url.com';
    const { container } = render(<Link href={linkUrl}>Navigation Link</Link>);
    expect(container).toMatchSnapshot();
    expect(container.querySelector('a').href).toContain(linkUrl);
  });
});
