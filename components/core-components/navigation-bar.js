var React = require('react');
var Icon = require('components/core-components/icon');
var Link = require('components/core-components/link');

var NavigationBar = React.createClass({

    getInitialState: function() {
        return {
          mobileNav: 'navigation-bar',
          burguerButton: 'open'
        }
    },

    render: function () {
        return (
            <div className="navigation">
            <div className="navigation-logo-container"></div>
            <button {...this.getBurgerButtonProps()}>
              {this.getIcon()}
            </button>
            <a href="demo.html">
              <img className="navigation-logo" src="images/iso_blanco.png" />
            </a>
              <nav>
                  {this.getLinks()}
              </nav>
            <div className="navigation-networks-container"></div>
            <div className="navigation-networks">
                <Link kind="no_bubble" linkType="facebook"/>
                <Link kind="no_bubble" linkType="twitter"/>
                <Link kind="no_bubble" linkType="instagram"/>
            </div>
            </div>
        );
    },

    getIcon: function () {
      return (this.state.burguerButton === 'open') ? <Icon type="bars" /> : <Icon type="close" />;
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
            <div className="navigation-bar-links"><a href="#">NOVEDADES</a></div>
            <div className="navigation-bar-links"><a href="#">DEPORTES</a></div>
            <div className="navigation-bar-links"><a href="#">LIFE STYLE</a></div>
            <div className="navigation-bar-links"><a href="#">TURISMO</a></div>
            <div className="navigation-bar-links"><a href="#">OCIO</a></div>
            <div className="navigation-bar-links"><a href="#">TECNO</a></div>
            <div className="navigation-bar-links"><a href="#">SOCIALES</a></div>
            <div className="navigation-bar-links"><a href="#">CONCEPTO TV</a></div>
          </div>
        );
    },

    handleClick: function() {
      (this.state.mobileNav === 'navigation-bar') ?
      this.setState({ mobileNav: 'navigation-bar--opened' }) :
      this.setState({ mobileNav: 'navigation-bar'});

      (this.state.mobileNav === 'navigation-bar') ?
      this.setState({ burguerButton: 'close' }) :
      this.setState({ burguerButton: 'open'});
    }
});

module.exports = NavigationBar;
