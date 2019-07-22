import React, { FunctionComponent } from 'react';
import NextLink from 'next/link';

interface ILinkProps {
  /**
   * [required] URL path to navigate to
   */
  href: string;
  /**
   * [optional] Pretty path to show in URL bar (useful for slugs)
   */
  as?: string;

  /**
   * [required] Children of link can be anything (temporary workaround for types not
   * matching).  The goal is to restrict children to the string type here
   */
  children: any;
}

export const Link: FunctionComponent<ILinkProps> = props => (
  <NextLink {...props}>
    <a>{props.children}</a>
  </NextLink>
);
