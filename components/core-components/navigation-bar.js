var React = require('react');

var NavigationBar = React.createClass({

    render: function () {
        return (
            <div className="navigation-bar">
              <nav>
                  {this.getLinks()}
              </nav>
            </div>
        );
    },

    getLinks: function () {
        var links = null;

        if (this.props.alignment === 'horizontal') {
            links = (
                <div className="navigation-bar--horizontal">
                    <a href="#" className="navigation-bar-links">General</a> |
                    <a href="#" className="navigation-bar-links">Deportes</a> |
                    <a href="#" className="navigation-bar-links">Espectaculo</a> |
                    <a href="#" className="navigation-bar-links">Economia</a> |
                    <a href="#" className="navigation-bar-links">Tecnologia</a> |
                    <a href="#" className="navigation-bar-links">Turismo</a>
                </div>
            );
        } else if (this.props.alignment === 'vertical') {
            links = (
                <div className="navigation-bar--vertical">
                    <a href="#" className="navigation-bar-links--vertical">General</a>
                    <a href="#" className="navigation-bar-links--vertical">Deportes</a>
                    <a href="#" className="navigation-bar-links--vertical">Espectaculo</a>
                    <a href="#" className="navigation-bar-links--vertical">Economia</a>
                    <a href="#" className="navigation-bar-links--vertical">Tecnologia</a>
                    <a href="#" className="navigation-bar-links--vertical">Turismo</a>
                </div>
            )
        }

        return links;
    }

});

module.exports = NavigationBar;
