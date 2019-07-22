export interface IDefaultProps {
  /**
   * Automatically populated className prop passed in by Styled Components
   */
  className?: string;

  /**
   * Placeholder for children prop to be overridden by components extending this interface
   */
  children?: any;

  /**
   * Most components have onClick support
   */
  onClick?: () => any;

  /**
   * Basic onMouseOver support
   */
  onMouseOver?: () => any;
}
