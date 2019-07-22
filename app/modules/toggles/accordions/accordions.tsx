import React, { FunctionComponent } from 'react';
import { Toggles } from 'modules/toggles';
import { Column } from 'layouts';
import { Accordion } from './accordion';
import { isString } from 'utils';

export interface IAccordionChild {
  /**
   * Unique Key to identify each Accordion by
   */
  key: string;
  /**
   * `Component` or `string` to render as accordion header
   */
  header: JSX.Element | string;
  /**
   * `Component` or `string` to render when accordion is open
   */
  content: JSX.Element | string;
}

interface IAccordionsProps {
  /**
   * [optional] Default accordion to show.  If not provided, no accordion will be open
   * by default
   */
  defaultAccordionName?: string;
  /**
   * [optional] Unique Key to identify component by.  Enables use of local
   * storage to maintain component state across page refreshes
   */
  accordionKey?: string;

  /**
   * [required] children must be defined using an array of keyed objects matching
   * the `IAccordionChild` interface
   */
  children: IAccordionChild[];

  /**
   * [optional] Allows only one accordion to be open at a time.  Default behavior allows
   * accordions to be opened or closed independently
   */
  onlyOneOpen?: boolean;
}

export const Accordions: FunctionComponent<IAccordionsProps> = props => {
  const defaultToggleProps = isString(props.defaultAccordionName)
    ? {
        defaultToggleName: props.defaultAccordionName,
      }
    : {
        overrideDefault: true,
      };
  return (
    <Toggles
      toggleKey={props.accordionKey}
      disassociateToggles={!props.onlyOneOpen}
      {...defaultToggleProps}
    >
      {props.children.map((child: IAccordionChild) => (
        <Column key={child.key} flex="1 1 auto">
          <Accordion.TitleBar accordionName={child.key}>
            {child.header}
          </Accordion.TitleBar>
          <Accordion.Content accordionName={child.key}>
            {child.content}
          </Accordion.Content>
        </Column>
      ))}
    </Toggles>
  );
};
