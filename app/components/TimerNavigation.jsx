var React = require('react');
var {Link, IndexLink} = require('react-router');
var {Navbar, Nav, NavItem} = require('react-bootstrap');
var {LinkContainer, IndexLinkContainer} = require('react-router-bootstrap');

var TimerNavigation = React.createClass( {
    render: function() {
        return(
            <div>

                <Navbar fluid={true}>
                    <Navbar.Header>
                        <Navbar.Toggle />
                        <Navbar.Brand>
                            React Timer App
                        </Navbar.Brand>
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav>
                            <IndexLinkContainer to="/" activeClassName="active"><NavItem>Timer</NavItem></IndexLinkContainer>
                            <LinkContainer to="/countdown" activeClassName="active"><NavItem>Countdown</NavItem></LinkContainer>
                        </Nav>
                        <Navbar.Text pullRight>
                            Created by <a href="https://github.com/henroben">Benjamin Mercer</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
});

module.exports = TimerNavigation;