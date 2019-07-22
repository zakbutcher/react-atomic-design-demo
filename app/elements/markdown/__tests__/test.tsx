import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Markdown, InteractiveMarkdown } from 'elements';

const allMarkdown = `
  # Heading 1
  ## Heading 1
  ### Heading 1
  # <a name="heading-with-anchor"></a>Heading With Anchor

  paragraph
  **Strong**
  _em_

  * Unordered list 1
  * Unordered list 2

  1. Ordered list 1
  2. Ordered list 2

  [Link to somethign](linktosomething.com)

  ---

  \`inline code\`
  \`\`\`
    const blockCodeFunc = () => {
      return 'works!';
    }
  \`\`\`
`;

const markdownContent = `Markdown Text`;
const onClick = jest.fn();
/**
 * @todo Replace with Button component
 */
const testId = 'button';
const clickableButton = (
  <button key={testId} data-testid={testId} onClick={onClick}>
    Click Me
  </button>
);

describe('Markdown', () => {
  it('Renders All Markdown Components', () => {
    const { container } = render(<Markdown source={allMarkdown} />);
    expect(container).toMatchSnapshot();
  });
  it('Renders Markdown with Interactive React Components', () => {
    const { container, getByTestId } = render(
      <InteractiveMarkdown>
        {[markdownContent, clickableButton]}
      </InteractiveMarkdown>,
    );
    expect(container).toMatchSnapshot();

    fireEvent.click(getByTestId(testId));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
