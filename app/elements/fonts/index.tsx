import React from 'react';
import { IDefaultProps } from 'types';

export const PageTitle = (props: IDefaultProps) => <h1 {...props} />;
export const SectionTitle = (props: IDefaultProps) => <h2 {...props} />;
export const SubsectionTitle = (props: IDefaultProps) => <h3 {...props} />;

interface IParagraphFontProps extends IDefaultProps {
  /**
   * [optional] Wraps children in `em` tag
   */
  emphasis?: boolean;
  /**
   * [optional] Wraps children in `strong` tag
   */
  strong?: boolean;
  /**
   * [optiona] Renders paragraph with Description instead of Primary styles
   */
  isDescription?: boolean;
}

const Emphasis = (props: any) => <em {...props} />;
const Strong = (props: any) => <strong {...props} />;
export const PrimaryText = (props: IParagraphFontProps) => {
  const className = props.isDescription
    ? `${props.className} description`
    : props.className;
  if (props.emphasis || props.strong) {
    const Em = props.emphasis ? Emphasis : React.Fragment;
    const St = props.strong ? Strong : React.Fragment;
    return (
      <p className={className}>
        <Em>
          <St>{props.children}</St>
        </Em>
      </p>
    );
  }
  return <p {...props} className={className} />;
};
export const DescriptionText = (props: IParagraphFontProps) => (
  <PrimaryText {...props} className={`${props.className} description`} />
);
