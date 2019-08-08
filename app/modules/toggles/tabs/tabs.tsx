import React, { FunctionComponent } from 'react';
import { Toggles } from 'modules/toggles';

interface ITabsProps {
  /**
   * [optional] Default tab to show.  If not provided, will default to first
   * child
   */
  defaultTabName?: string;
  /**
   * [optional] Unique Key to identify component by.  Enables use of local
   * storage to maintain component state across page refreshes
   */
  tabKey?: string;
}

export const Tabs: FunctionComponent<ITabsProps> = props => (
  <Toggles toggleKey={props.tabKey} defaultToggleName={props.defaultTabName}>
    {props.children}
  </Toggles>
);
