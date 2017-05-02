import React from 'react';

const AppLayout = React.createClass({

  propTypes: {
    children: React.PropTypes.any.isRequired,
  },

  render() {
    return this.props.children;
  },

});

export default AppLayout;
