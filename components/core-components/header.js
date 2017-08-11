var React = require('react');
var NavigationBar = require('components/core-components/navigation-bar')

var Header = React.createClass({

    render: function () {
        return (
            <div className="header">
              <a href="demo.html">
                  <img className="header-logo" src="images/iso_blanco.png" />
                </a>
            </div>
        );
    }
});

module.exports = Header;
