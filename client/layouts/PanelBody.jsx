import React from 'react';
import ReactBootstrap from 'react-bootstrap';

let Panel = ReactBootstrap.Panel;
let Grid = ReactBootstrap.Grid;
let Col = ReactBootstrap.Col;


const PanelBody = React.createClass({
  render() {
    return (

      <Panel>

        <Grid>

          <Col>

            <h2>Avarus animus nullo satiatur lucro</h2>
            <p>(A greedy mind is satisfied with no amount of gain)</p>


          </Col>

        </Grid>

      </Panel>

    );
  },

});

export default PanelBody;
