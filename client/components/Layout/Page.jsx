import React from 'react';

const Page = React.createClass({

  propTypes: {
    children: React.PropTypes.any
  },

  render() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    );
  },
});

export default Page;
