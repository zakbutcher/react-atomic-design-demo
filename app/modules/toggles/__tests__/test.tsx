import React from 'react';
import { togglesReducer, INITIAL_STATE } from 'modules/toggles/reducer';
import { TogglesActions } from 'modules/toggles/actions';
import { Toggles, Toggle } from 'modules';
import { render, fireEvent } from '@testing-library/react';

describe('Toggles', () => {
  describe('Actions & Reducer', () => {
    it('Returns INITIAL_STATE', () => {
      // @ts-ignore
      const toggleState = togglesReducer(undefined, {});
      expect(toggleState).toEqual(INITIAL_STATE);
    });
    it('Registers New Toggle', () => {
      const toggleState = togglesReducer(
        INITIAL_STATE,
        TogglesActions.registerToggle('New Toggle'),
      );
      expect(toggleState.toggles).toContain('New Toggle');
    });
    it('Sets Active Toggle', () => {
      const toggleState = togglesReducer(
        INITIAL_STATE,
        TogglesActions.setActiveToggle(['Active Toggle']),
      );
      expect(toggleState.activeToggles).toEqual(['Active Toggle']);
    });
  });
  describe('Parent + Child Integration', () => {
    /**
     * @todo Find a way to call multiple renders in nested `describe` blocks
     * without screwing up rendered DOM structure to enable testing w/ & w/out
     * `defaultToggle` prop being defined
     *
     * Figured it out!!
     *
     * using `cleanup` in `beforeEach` happens between `it` declarations, NOT `describes`
     */
    describe('No `defaultToggle` Provided', () => {
      const labels = (
        <>
          <Toggle.Select toggleName="first">
            <>First Toggle Select</>
          </Toggle.Select>
          <Toggle.Select toggleName="second">
            <>Second Toggle Select</>
          </Toggle.Select>
        </>
      );

      const content = (
        <>
          <Toggle.Content toggleName="first">
            <div>First Toggle Content</div>
          </Toggle.Content>
          <Toggle.Content toggleName="second">
            <div>Second Toggle Content</div>
          </Toggle.Content>
        </>
      );
      const { getByText } = render(
        <Toggles>
          {labels}
          {content}
        </Toggles>,
      );

      it('Automatically selects first Toggle', () => {
        expect(getByText('First Toggle Content')).toBeVisible();
      });
      it('Changes Selected Toggle onClick', () => {
        fireEvent.click(getByText('Second Toggle Select'));
        expect(getByText('Second Toggle Content')).toBeVisible();
      });
    });
  });
});
