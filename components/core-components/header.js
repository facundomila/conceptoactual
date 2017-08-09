var React = require('react');
var NavigationBar = require('components/core-components/navigation-bar')

var Header = React.createClass({

    render: function () {
        return (
            <div className="header">
                <img className="header-logo" src="images/iso_blanco.png" />
            </div>
        );
    }
});

module.exports = Header;
