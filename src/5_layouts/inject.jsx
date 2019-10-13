import React from 'react';

export const Inject = props => (
  <>
    {React.Children.toArray(props.children).map((child, index) =>
      console.log(props) || index < props.children.length - 1 ? (
        <React.Fragment key={child.key}>
          {child}
          {props.inject}
        </React.Fragment>
      ) : (
        child
      ),
    )}
  </>
);
