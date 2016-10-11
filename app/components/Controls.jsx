var React = require('react');
var {Grid, Row, Col} = require('react-bootstrap');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function() {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if(countdownStatus === 'started') {
                return <button className="btn btn-default btn-block" onClick={this.onStatusChange('paused')}>Pause</button>
            } else {
                return <button className="btn btn-primary btn-block" onClick={this.onStatusChange('started')}>Start</button>
            }
        };

        return(
            <div className="controls">
                <Row>
                    <Col md={6}>
                        {renderStartStopButton()}
                    </Col>
                    <Col md={6}>
                        <button className="btn btn-danger btn-block" onClick={this.onStatusChange('stopped')}>Clear</button>
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = Controls;