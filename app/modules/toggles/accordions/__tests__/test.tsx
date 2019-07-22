import React from 'react';
import { Accordions } from 'modules';
import { render, fireEvent } from '@testing-library/react';
import { Border } from 'layouts';

describe('Accordions', () => {
  describe('Parent + Child Integration', () => {
    describe('No `defaultAccordion` Provided', () => {
      const { getByTestId, getByText, queryByText } = render(
        <Accordions>
          {[
            {
              key: 'first',
              header: 'First Accordion',
              content: 'First Accordion Content',
            },
            {
              key: 'second',
              header: 'Second Accordion',
              content: 'Second Accordion Content',
            },
          ]}
        </Accordions>,
      );

      it('No Accordions open by default', () => {
        expect(queryByText('First Accordion Content')).toBeNull();
        expect(queryByText('Second Accordion Content')).toBeNull();
      });
      it('Opens First Accordion', () => {
        fireEvent.click(getByTestId('first-accordion-titleBar'));
        expect(getByTestId('first-accordion-titleBar')).toHaveStyle(Border.BOTTOM);
        expect(getByText('First Accordion Content')).toBeVisible();
      });
      it('Opens Second Accordion', () => {
        fireEvent.click(getByTestId('second-accordion-titleBar'));
        expect(getByTestId('second-accordion-titleBar')).toHaveStyle(Border.BOTTOM);
        expect(getByText('Second Accordion Content')).toBeVisible();
      });
    });
  });
});
