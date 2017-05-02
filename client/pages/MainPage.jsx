import React from 'react';
import PageBody from '../components/Layout/PageBody.jsx';
import ReactBootstrap from 'react-bootstrap';
import Carousel from '../layouts/Carousel.jsx';
import PanelBody from '../layouts/PanelBody.jsx';

const MainPage = React.createClass({
  render() {
    return (
    <PageBody>
      <Carousel />
      <PanelBody />
    </PageBody>

    );
  },

});

export default MainPage;
