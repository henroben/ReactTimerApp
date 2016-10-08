var React = require('react');
var TimerNavigation = require('TimerNavigation');

var Main = (props) => {
    return (
        <div>
            <TimerNavigation/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        {props.children}
                    </div>
                </div>
            </div>

        </div>
    );
};

module.exports = Main;