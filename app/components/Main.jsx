var React = require('react');
var TimerNavigation = require('TimerNavigation');
var {Grid, Row, Col} = require('react-bootstrap');

var Main = (props) => {
    return (
        <div>
            <TimerNavigation/>

            <Grid>
                <Row className="show-grid">
                    <Col md={3} xsHidden></Col>
                    <Col md={6}>
                        {props.children}
                    </Col>
                    <Col md={3} xsHidden></Col>
                </Row>
            </Grid>

        </div>
    );
};

module.exports = Main;