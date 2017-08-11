var React = require('react');
var Icon = require('components/core-components/icon')

var NavigationBar = React.createClass({

    getInitialState: function() {
        return {
          mobileNav: 'navigation-bar'
        }
    },

    render: function () {
        return (
            <div className="navigation">
              <button {...this.getBurgerButtonProps()}>
                <Icon type="bars" />
              </button>
              <nav>
                  {this.getLinks()}
              </nav>
            </div>
        );
    },

    getBurgerButtonProps: function () {
      var props = {
        className: 'navigation-bar-burger-btn',
        onClick: this.handleClick
      }
      return props;
    },

    getLinks: function () {
        return (
          <div className={this.state.mobileNav}>
            <a href="#" className="navigation-bar-links">NOVEDADES</a>
            <a href="#" className="navigation-bar-links">DEPORTES</a>
            <a href="#" className="navigation-bar-links">LIFE STYLE</a>
            <a href="#" className="navigation-bar-links">TURISMO</a>
            <a href="demo.html">
            <img className="navigation-bar-img" src="images/small-logo.png" />
            </a>
            <a href="#" className="navigation-bar-links">OCIO</a>
            <a href="#" className="navigation-bar-links">TECNO</a>
            <a href="#" className="navigation-bar-links">SOCIALES</a>
            <a href="#" className="navigation-bar-links">CONCEPTO TV</a>
          </div>
        );
    },

    handleClick: function() {
      (this.state.mobileNav === 'navigation-bar') ?
      this.setState({ mobileNav: 'navigation-bar--opened' }) :
      this.setState({ mobileNav: 'navigation-bar'});
    }
});

module.exports = NavigationBar;
