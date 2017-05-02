import React from 'react';

const PageBody = React.createClass({

  propTypes: {
    children: React.PropTypes.any
  },

  render() {
    const {className, children, ...attr} = this.props;
    return (
      <div className={className ? "page-body " + className : "page-body"} {...attr}>
        {children}
      </div>
    );
  },
});

export default PageBody;
