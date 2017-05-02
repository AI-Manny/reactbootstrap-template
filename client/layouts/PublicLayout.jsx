import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const PublicLayout = React.createClass({

  propTypes: {
    children: React.PropTypes.any,
    location: React.PropTypes.any,
  },

  render() {
    return (
      <div>
          <div>
                <Header />
                <main>
                    {React.cloneElement(this.props.children, {
                      key: this.props.location.pathname,
                    })}
                </main>
          </div>
          <Footer />
      </div>
    );
  },
});

export default PublicLayout;
