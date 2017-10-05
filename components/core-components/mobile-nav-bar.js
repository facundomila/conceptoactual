var React = require('react');
var Icon = require('components/core-components/icon');
var Link = require('components/core-components/link');

var MobileNavBar = React.createClass({

    getInitialState: function() {
        return {
          mobileNavClass: 'mobile-nav-bar',
          burguerButton: 'open'
        }
    },

    render: function () {
        return (
            <div className="mobile-nav-bar">
              <button {...this.getBurgerButtonProps()}>
                {this.getIcon()}
              </button>
              <span>mobile nav</span>
              {this.getLinks()}
            </div>
        );
    },

    getLinks: function () {
        return (
          <div className="mobile-nav-bar-links">
            <div><a href="#">Novedades</a></div>
            <div><a href="#">Deportes</a></div>
            <div><a href="#">Life Style</a></div>
            <div><a href="#">Turismo</a></div>
            <div><a href="#">Ocio</a></div>
            <div><a href="#">Tecno</a></div>
            <div><a href="#">Sociales</a></div>
            <div><a href="#">Concepto Tv</a></div>
          </div>
        );
    },

    renderLogoBar: function () {
      var logo = <div><img className="" src="images/logo_blanco_bar.png"/></div>;

      return logo;
    },

    renderNetworks: function () {
      var networks = (
        <div className="networks">
            <Link kind="no_bubble" linkType="facebook"/>
            <Link kind="no_bubble" linkType="twitter"/>
            <Link kind="no_bubble" linkType="instagram"/>
        </div>
      );

      return networks;
    },

    getIcon: function () {
        return (this.state.burguerButton === 'open') ? <Icon type="bars" /> : <Icon type="close" />;
    },

    getBurgerButtonProps: function () {
        var props = {
          className: 'mobile-nav-bar-burger-btn',
          onClick: this.handleClick
        }
        return props;
    },

    handleClick: function() {
        (this.state.mobileNav === 'mobile-nav-bar') ?
        this.setState({ mobileNavClass: 'mobile-nav-bar--opened' }) :
        this.setState({ mobileNavClass: 'mobile-nav-bar'});

        (this.state.mobileNav === 'mobile-nav-bar') ?
        this.setState({ burguerButton: 'close' }) :
        this.setState({ burguerButton: 'open'});
    }
});

module.exports = MobileNavBar;
