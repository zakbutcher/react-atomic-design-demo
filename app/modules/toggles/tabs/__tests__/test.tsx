import React from 'react';
import { Tabs, Tab } from 'modules';
import { render, fireEvent } from '@testing-library/react';
import { Border } from 'layouts';

describe('Tabs', () => {
  describe('Parent + Child Integration', () => {
    /**
     * @todo Find a way to call multiple renders in nested `describe` blocks
     * without screwing up rendered DOM structure to enable testing w/ & w/out
     * `defaultTab` prop being defined
     */
    describe('No `defaultTab` Provided', () => {
      const labels = (
        <>
          <Tab.Label tabName="first">First Tab Label</Tab.Label>
          <Tab.Label tabName="second">Second Tab Label</Tab.Label>
        </>
      );

      const content = (
        <>
          <Tab.Content tabName="first">
            <div>First Tab Content</div>
          </Tab.Content>
          <Tab.Content tabName="second">
            <div>Second Tab Content</div>
          </Tab.Content>
        </>
      );
      const { getByTestId, getByText } = render(
        <Tabs>
          {labels}
          {content}
        </Tabs>,
      );

      it('Automatically selects first Tab', () => {
        expect(getByTestId('first-tab-label')).toHaveStyle(Border.PRIMARY_LEFT);
        expect(getByText('First Tab Content')).toBeVisible();
      });
      it('Changes Selected Tab onClick', () => {
        fireEvent.click(getByTestId('second-tab-label'));
        expect(getByTestId('second-tab-label')).toHaveStyle(Border.PRIMARY_LEFT);
        expect(getByText('Second Tab Content')).toBeVisible();
      });
    });
  });
});
