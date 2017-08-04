var React = require('react');
var NavigationBar = require('components/core-components/navigation-bar')

var Header = React.createClass({

    render: function () {
        return (
            <div className="header">
                <img className="header-logo" src="images/iso_blanco.png" />
                <div className="header-navigation">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Header;
