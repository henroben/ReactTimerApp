var React = require('react');
var {Link, IndexLink} = require('react-router');

var TimerNavigation = React.createClass( {
    render: function() {
        return(
            <div>

                <nav className="navbar navbar-default">
                     <div className="container-fluid">
                         <div className="navbar-header">
                            <div className="navbar-brand">React Timer App</div>
                         </div>
                         <ul className="nav navbar-nav">
                             <li className="navbar-left"><IndexLink to="/" activeClassName="active">Timer</IndexLink></li>
                             <li className="navbar-left"><Link to="/countdown" activeClassName="active">Countdown</Link></li>
                         </ul>
                         <ul className="nav navbar-right">
                             <li className="navbar-right"><div className="navbar-brand right-brand">Created by <a href="https://github.com/henroben">Benjamin Mercer</a></div></li>
                         </ul>
                     </div>
                </nav>

            </div>
        );
    }
});

module.exports = TimerNavigation;