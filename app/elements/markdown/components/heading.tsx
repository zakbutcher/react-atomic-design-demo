import { PageTitle, SectionTitle, SubsectionTitle } from 'elements';
import React, { SFC } from 'react';
import { IDefaultProps } from 'types';

interface IHeadingChildProps {
  escapeHtml?: boolean;
  value?: string;
}

interface IHeadingProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Heading level to be rendered (ranges from 1 to 6)
   */
  level: number;

  /**
   * [required] Any children being passed to heading
   */
  children: React.ReactElement<IHeadingChildProps>[];
}

/**
 * This method helps enable in-page linking
 *
 * Create anchor location using inline `<a />` tags:
 *    `## <a name="link-name-here"></a>Heading To Anchor`
 *
 * Create link to anchor using standard `[]()` markdown syntax:
 *    `[text to display as link](#link-name-here)`
 */
const renderChildren = (
  children: React.ReactElement<IHeadingChildProps>[],
): JSX.Element => (
  <>
    {React.Children.toArray(children).map(child => {
      if (child.props.escapeHtml) {
        return (
          <div
            key={child.key}
            dangerouslySetInnerHTML={{ __html: child.props.value }}
          />
        );
      }
      return child;
    })}
  </>
);

/** Heading */
export const Heading: SFC<IHeadingProps> = props => {
  const renderHeading = () => {
    switch (props.level) {
      case 2:
        return (
          <SectionTitle className={props.className}>
            {renderChildren(props.children)}
          </SectionTitle>
        );
      case 3:
        return (
          <SubsectionTitle className={props.className}>
            {renderChildren(props.children)}
          </SubsectionTitle>
        );
      case 1:
      default:
        return (
          <PageTitle className={props.className}>
            {renderChildren(props.children)}
          </PageTitle>
        );
    }
  };
  return renderHeading();
};
Heading.displayName = 'Heading';
